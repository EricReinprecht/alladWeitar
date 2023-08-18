import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABCLSYYF6tCso2OsmdKJJuhJgi6Qg1Jyw",
  authDomain: "alladweitarv2.firebaseapp.com",
  projectId: "alladweitarv2",
  storageBucket: "alladweitarv2.appspot.com",
  messagingSenderId: "518191545789",
  appId: "1:518191545789:web:f61bad63226c79dae7e6d4",
  measurementId: "G-SNC78NJ38K"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Initialize auth
const db = getFirestore(app); // Initialize Firestore

export { auth, db, getFirestore }; // Export auth and db