const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function signToken(userId) {
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not set");
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "7d",
  });
}

exports.register = async (req, res) => {
  try {
    const { shopName, ownerName, email, phone, address, password, agree } = req.body || {};
    if (!shopName || !ownerName || !email || !phone || !password) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email is already registered" });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ shopName, ownerName, email, phone, address, password: hashed, agree });

    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ message: "Email & password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken(user._id);
    res.json({
      user: {
        id: user._id,
        shopName: user.shopName,
        ownerName: user.ownerName,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
      message: "Login successful",
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
