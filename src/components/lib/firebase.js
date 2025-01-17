import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkymliuMrvmO1jYHDyt9fFQvbswmNw99A",
  authDomain: "chattychat-c1a1f.firebaseapp.com",
  projectId: "chattychat-c1a1f",
  storageBucket: "chattychat-c1a1f.firebasestorage.app",
  messagingSenderId: "163635992979",
  appId: "1:163635992979:web:7755e81b6db6cfb5b5f066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();