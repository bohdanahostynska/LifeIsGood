import React, { useState, useEffect } from "react";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    if (currentUser === null) {
      localStorage.setItem("user", "null");
    } else {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
