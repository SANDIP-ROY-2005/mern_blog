// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv';
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
//   apiKey: process.env.VITE_FIREBASE_API_KEY,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-30f50.firebaseapp.com",
  projectId: "mern-blog-30f50",
  storageBucket: "mern-blog-30f50.firebasestorage.app",
  messagingSenderId: "505094806326",
  appId: "1:505094806326:web:7dc3fcdd769a735f337197"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
