import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isAuthed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-blue-100 shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bazaar Up Logo" className="h-10 w-auto rounded-lg shadow-sm" />
          <span className="text-2xl md:text-3xl font-bold text-blue-800">Bazaar Up</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/explore" className="text-gray-700 hover:text-blue-600">Explore</Link>

          {!isAuthed ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-blue-900 bg-blue-200 px-3 py-1 rounded-full">
                {user?.ownerName || user?.shopName || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-md bg-red-600 text-white text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-blue-50 shadow-inner">
          <ul className="flex flex-col divide-y">
            <li><Link to="/" onClick={() => setOpen(false)} className="block px-6 py-3 hover:bg-blue-100">Home</Link></li>
            <li><Link to="/dashboard" onClick={() => setOpen(false)} className="block px-6 py-3 hover:bg-blue-100">Dashboard</Link></li>
            <li><Link to="/explore" onClick={() => setOpen(false)} className="block px-6 py-3 hover:bg-blue-100">Explore</Link></li>

            {!isAuthed ? (
              <>
                <li><Link to="/login" onClick={() => setOpen(false)} className="block px-6 py-3 hover:bg-blue-100">Login</Link></li>
                <li><Link to="/register" onClick={() => setOpen(false)} className="block px-6 py-3 hover:bg-blue-100">Register</Link></li>
              </>
            ) : (
              <li className="px-6 py-3 flex items-center justify-between">
                <span className="text-blue-900">{user?.ownerName || user?.email}</span>
                <button onClick={() => { setOpen(false); handleLogout(); }} className="px-3 py-1 rounded bg-red-600 text-white">Logout</button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
