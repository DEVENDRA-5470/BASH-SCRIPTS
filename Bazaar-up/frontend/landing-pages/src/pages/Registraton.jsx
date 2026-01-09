// src/pages/Register.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png"; // optional logo

export default function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (password !== confirmPassword) {
      setMsg({ type: "error", text: "Passwords do not match." });
      setLoading(false);
      return;
    }

    const payload = {
      shopName: form.get("shopName"),
      ownerName: form.get("ownerName"),
      email: form.get("email"),
      phone: form.get("phone"),
      address: form.get("address"),
      password,
      agree: form.get("agree") === "on",
    };

 try {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (res.ok) {
    setMsg({ type: "success", text: data.message || "Account created!" });
    e.target.reset();
  } else {
    setMsg({ type: "error", text: data.message || "Registration failed." });
  }
} catch (err) {
  setMsg({ type: "error", text: "Server error. Try again later." });
}
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
   

      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form card */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Create your account
          </h2>
          <p className="text-gray-600 mb-6">
            Join Bazaar Up to manage inventory, billing, and customers in one place.
          </p>

          {msg.text && (
            <div
              className={`mb-5 rounded-lg border px-4 py-3 text-sm ${
                msg.type === "success"
                  ? "border-green-300 bg-green-50 text-green-800"
                  : "border-red-300 bg-red-50 text-red-800"
              }`}
              role="alert"
            >
              {msg.text}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Shop + Owner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Shop Name" name="shopName" required placeholder="e.g., Yadav General Store" />
              <InputField label="Owner Name" name="ownerName" required placeholder="e.g., Devendra Yadav" />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="Email Address" name="email" type="email" required placeholder="you@shop.com" />
              <InputField label="Phone" name="phone" type="tel" pattern="^[0-9+\-\s()]{7,15}$" required placeholder="+91 98xxxxxxx" />
            </div>

            {/* Address */}
            <InputField label="Shop Address (optional)" name="address" placeholder="Street, City, Pincode" />

            {/* Password + Confirm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PasswordField label="Password" name="password" show={showPwd} toggle={() => setShowPwd(s => !s)} required minLength={8} placeholder="At least 8 characters" />
              <PasswordField label="Confirm Password" name="confirmPassword" show={showPwd2} toggle={() => setShowPwd2(s => !s)} required placeholder="Re-enter password" />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" name="agree" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span>
                I agree to the{" "}
                <a href="/terms" className="text-blue-700 hover:underline">Terms</a> and{" "}
                <a href="/privacy" className="text-blue-700 hover:underline">Privacy Policy</a>.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already registered?{" "}
              <a href="/login" className="text-blue-700 hover:underline">Login</a>
            </p>
          </form>
        </section>

        {/* Side Info */}
        <aside className="rounded-2xl bg-white/60 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why join Bazaar Up?
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li><strong className="text-blue-800">Real-time inventory</strong> — avoid stockouts with alerts.</li>
            <li><strong className="text-blue-800">Faster billing</strong> — GST-ready invoices & receipts via SMS/WhatsApp.</li>
            <li><strong className="text-blue-800">Smarter decisions</strong> — sales snapshots & profit reports.</li>
            <li><strong className="text-blue-800">Grows with you</strong> — add locations, staff, and loyalty rewards.</li>
          </ul>
          <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white">
            <p className="text-sm opacity-90">
              “Since moving to Bazaar Up, billing is twice as fast and restocks are on time.”
            </p>
            <p className="mt-2 text-xs opacity-80">— Local shop owner</p>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Bazaar Up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

/* 🔹 Reusable Input Components */
function InputField({ label, name, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        type={type}
        {...props}
        className="mt-1 w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function PasswordField({ label, name, show, toggle, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          name={name}
          type={show ? "text" : "password"}
          {...props}
          className="mt-1 w-full px-4 py-2.5 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-700 hover:underline"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
