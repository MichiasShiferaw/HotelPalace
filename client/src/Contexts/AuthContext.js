import React, { useState, createContext } from "react";

export const CustomersContext = createContext();

export const AuthContext = createContext({
  token: "",
  handleTokenChange: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const handleTokenChange = (token) => {
    setToken(token);
  };
  const handleUserChange = (user) => {
    setUser(user);
  };
  function logoutUser() {
    handleTokenChange("");
    handleUserChange({});
  }

  return (
    <AuthContext.Provider
      value={{ token, handleTokenChange, handleUserChange, user, logoutUser }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};
