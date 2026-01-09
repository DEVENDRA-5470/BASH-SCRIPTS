require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// ✅ This path must match the file you created
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bazaarup";

mongoose
  .connect(MONGO_URI, { dbName: "bazaarup" })
  .then(() => {
    console.log("Mongo connected");
    app.listen(PORT, "0.0.0.0", () => console.log(`API on http://127.0.0.1:${PORT}`));
  })
  .catch((err) => {
    console.error("Mongo connection error:", err);
    process.exit(1);
  });
