// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [authValue, setAuthValue] = useState(null);

  return (
    <UserContext.Provider value={{ authValue, setAuthValue }}>
      {children}
    </UserContext.Provider>
  );
}
