import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// Authentication functions
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

// Firestore functions for user management
export const createUserProfile = async (userId, data) => {
  try {
    await setDoc(doc(db, "users", userId), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
};

// Watchlist functions
export const addToWatchlist = async (userId, movieData) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      watchlist: arrayUnion(movieData),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error("Error adding to watchlist:", error);
    throw error;
  }
};

export const removeFromWatchlist = async (userId, movieId) => {
  try {
    // First get the user's watchlist to find the movie object to remove
    const userDoc = await getDoc(doc(db, "users", userId));
    if (!userDoc.exists()) {
      throw new Error("User not found");
    }
    
    const userData = userDoc.data();
    const watchlist = userData.watchlist || [];
    const movieToRemove = watchlist.find(movie => movie.id.toString() === movieId.toString());
    
    if (movieToRemove) {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        watchlist: arrayRemove(movieToRemove),
        updatedAt: new Date()
      });
    }
  } catch (error) {
    console.error("Error removing from watchlist:", error);
    throw error;
  }
};

// Movie ratings and reviews functions
export const addRating = async (userId, movieId, rating, review = "") => {
  try {
    const ratingData = {
      movieId,
      rating,
      review,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Store in user's ratings collection
    await setDoc(doc(db, "users", userId, "ratings", movieId.toString()), ratingData);
    
    // Also add to main ratings collection for aggregation
    await setDoc(doc(db, "ratings", `${userId}_${movieId}`), {
      ...ratingData,
      userId
    });
  } catch (error) {
    console.error("Error adding rating:", error);
    throw error;
  }
};

// Real-time listeners
export const subscribeToWatchlist = (userId, callback) => {
  const userRef = doc(db, "users", userId);
  return onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      const data = doc.data();
      callback(data.watchlist || []);
    } else {
      callback([]);
    }
  });
};

// Export Firebase instances
export { storage, googleProvider }; 
