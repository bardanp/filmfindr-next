"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "@/lib/firebase";

// Create authentication context
const AuthContext = createContext({
  user: null,
  loading: true,
  login: async (email, password) => {},
  signup: async (email, password) => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set up the Firebase auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("onAuthStateChanged:", firebaseUser);
      setUser(firebaseUser);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Sign in function
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error; // Re-throw to be caught by the form
    } finally {
      setLoading(false);
    }
  };

  // Sign up function
  const signup = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      // You might want to set user display name here or prompt user for it
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error; // Re-throw to be caught by the form
    } finally {
      setLoading(false);
    }
  };
  
  // Sign out function
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null); // Explicitly set user to null on logout
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Provide the auth values to the context
  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
