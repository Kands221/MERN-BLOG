// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-830de.firebaseapp.com",
  projectId: "mern-blog-830de",
  storageBucket: "mern-blog-830de.appspot.com",
  messagingSenderId: "40585699602",
  appId: "1:40585699602:web:e4d6f53caeb39950c713cb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
