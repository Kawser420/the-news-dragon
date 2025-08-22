import React, { createContext, ReactNode } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

interface AuthContextType {
  user: { displayName: string } | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

const auth = getAuth(app);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = { displayName: "kawser" };

  const authInfo: AuthContextType = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
