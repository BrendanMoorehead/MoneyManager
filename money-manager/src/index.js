import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Database configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH818IlVPg9z6hQWprrPoquK67tVBW4iQ",
  authDomain: "money-manager-f05ea.firebaseapp.com",
  projectId: "money-manager-f05ea",
  storageBucket: "money-manager-f05ea.appspot.com",
  messagingSenderId: "876736763104",
  appId: "1:876736763104:web:0501154b27bc6686c16c85",
  measurementId: "G-PRTJ7MLSPM"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
//TODO: Learn about analytics values
const analytics = getAnalytics(app);

export { db, auth, analytics };