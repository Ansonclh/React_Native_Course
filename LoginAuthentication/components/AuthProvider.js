import React, { createContext, useState } from 'react';
import { View } from 'react-native';

// Create a Context for authentication
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user}}>
      {children}
    </AuthContext.Provider>
  );
}
