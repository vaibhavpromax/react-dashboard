// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-fc747.firebaseapp.com",
  projectId: "dashboard-fc747",
  storageBucket: "dashboard-fc747.appspot.com",
  messagingSenderId: "395488481975",
  appId: "1:395488481975:web:011258d06aa06340867332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth();