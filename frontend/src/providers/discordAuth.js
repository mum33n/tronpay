import React, { createContext } from "react";

function DiscordAuth({ children }) {
  const AuthProvider = createContext();
  return <AuthProvider.Provider value={{}}>{children}</AuthProvider.Provider>;
}

export default DiscordAuth;
