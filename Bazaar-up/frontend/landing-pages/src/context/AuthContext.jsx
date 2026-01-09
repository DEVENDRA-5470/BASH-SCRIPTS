import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("bu_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("bu_token") || "");

  // persist & set auth header on change
  useEffect(() => {
    if (user) localStorage.setItem("bu_user", JSON.stringify(user));
    else localStorage.removeItem("bu_user");
  }, [user]);

  useEffect(() => {
    if (token) localStorage.setItem("bu_token", token);
    else localStorage.removeItem("bu_token");
  }, [token]);

  const login = ({ user, token }) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthed: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}
