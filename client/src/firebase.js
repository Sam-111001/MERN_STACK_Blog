// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9b67b.firebaseapp.com",
  projectId: "mern-blog-9b67b",
  storageBucket: "mern-blog-9b67b.appspot.com",
  messagingSenderId: "426678261853",
  appId: "1:426678261853:web:7a712a99a3a1745e9f15b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
