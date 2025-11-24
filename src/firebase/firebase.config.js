// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2QkEomwfga59w3C9Nz58RhqpZEGyqs0",
  authDomain: "learning-books-568e1.firebaseapp.com",
  projectId: "learning-books-568e1",
  storageBucket: "learning-books-568e1.firebasestorage.app",
  messagingSenderId: "202030956244",
  appId: "1:202030956244:web:2a70e1fb3fdb75945cc541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);