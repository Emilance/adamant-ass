import React, { createContext, useContext, useEffect, useState } from "react";
import { generateRandomString, getToken, getUser, removeToken, setToken, setUser } from "../utils/utilFunc";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setcookUser] = useState(false);


  useEffect(() => {
    const checkIsLogin = () => {
      const token = getToken();
      const cookUser  = getUser()
      if (token) {
        console.log('Checking login status...');
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setcookUser(cookUser)
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
      setUser({name: param.userName})
      setIsLoggedIn(true)
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
    user
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
