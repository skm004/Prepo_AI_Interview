// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ2-pOPq6-x4Y6h6ebt600-KqoF88_-zc",
  authDomain: "prepo-815ba.firebaseapp.com",
  projectId: "prepo-815ba",
  storageBucket: "prepo-815ba.firebasestorage.app",
  messagingSenderId: "1090687182478",
  appId: "1:1090687182478:web:206680985c29d5e3ea8bdf",
  measurementId: "G-XDQC5QTNWW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);