import React, { createContext, useContext, useEffect, useState } from "react";
import { generateRandomString, getToken, removeToken, setToken } from "../utils/utilFunc";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkIsLogin = () => {
      const token = getToken();
      if (token) {
        console.log('Checking login status...');
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    // Run checkIsLogin once after the initial render
    checkIsLogin();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const login = (param) => {
    if (
      (param.userName === 'adamantcode' && param.password === 'password123!') ||
      (param.userName === 'daniel' && param.password === 'daniel123')
    ) {
      const token = generateRandomString(10);
      setToken(token);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  // Pass value to the provider
  const contextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
