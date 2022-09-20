import React, { createContext, useContext, useState } from "react";
import { USER_DATA, USER_TOKEN } from "../constants";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: JSON.parse(localStorage.getItem(USER_DATA)),
    token: localStorage.getItem(USER_TOKEN),
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
