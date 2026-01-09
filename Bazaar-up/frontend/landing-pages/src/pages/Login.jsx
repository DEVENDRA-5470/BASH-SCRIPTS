// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  // If useAuth isn't wired yet, avoid crashing
  const auth = typeof useAuth === "function" ? useAuth() : {};
  const { login: saveAuth } = auth || {};

  const navigate = useNavigate();

  // Keep message as an object everywhere
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email")?.trim();
    const password = form.get("password");
    const remember = form.get("remember") === "on";

    // basic validations
    if (!email || !password) {
      setMsg({ type: "error", text: "Please enter email and password." });
      setLoading(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg({ type: "error", text: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

if (!res.ok) {
  setMsg({ type: "error", text: data?.message || "Login failed." });
  return; // stop only on error
}

// ✅ success path
if (remember && data?.token) {
  localStorage.setItem("token", data.token);
}

try {
  saveAuth?.({ user: data.user, token: data.token });
} catch {
  /* ignore */
}

setMsg({ type: "success", text: data?.message || "Login successful. Redirecting..." });
navigate("/dashboard", { replace: true });

    } catch (err) {
      setMsg({ type: "error", text: "Server unreachable. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Top bar */}
      <header className="w-full bg-white/70 backdrop-blur">
        {/* optional: <img src={logo} alt="Bazaar Up" className="h-10 m-4" /> */}
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form card */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-6">
            Sign in to manage inventory, billing, and customers.
          </p>

          {msg.text ? (
            <div
              className={`mb-5 rounded-lg px-4 py-3 text-sm ${
                msg.type === "success"
                  ? "border border-green-300 bg-green-50 text-green-800"
                  : "border border-red-300 bg-red-50 text-red-800"
              }`}
              role="alert"
            >
              {msg.text}
            </div>
          ) : null}

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@shop.com"
                className="mt-1 w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPwd ? "text" : "password"}
                  placeholder="Your password"
                  className="mt-1 w-full px-4 py-2.5 border rounded-lg pr-14 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-700 hover:underline"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-700 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-[.99] transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-center text-sm text-gray-600">
              New to Bazaar Up?{" "}
              <Link to="/register" className="text-blue-700 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </section>

        {/* Side panel */}
        <aside className="rounded-2xl bg-white/60 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your shop, organized.
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-blue-800">Quick billing</span>{" "}
              — print/share GST-ready invoices in seconds.
            </li>
            <li>
              <span className="font-semibold text-blue-800">Stock insights</span>{" "}
              — low-stock and expiry alerts to prevent losses.
            </li>
            <li>
              <span className="font-semibold text-blue-800">Simple reports</span>{" "}
              — daily sales snapshot, top products, margins.
            </li>
          </ul>

          <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white">
            <p className="text-sm opacity-90">
              “Billing is faster and we never miss a restock now.”
            </p>
            <p className="mt-2 text-xs opacity-80">— Bazaar Up merchant</p>
          </div>
        </aside>
      </main>

      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Bazaar Up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
