import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [isBarOpen, setIsBarOpen] = useState(false);

  // Pass value to the provider
  const contextValue = {
    isBarOpen,
    setIsBarOpen
 
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};
