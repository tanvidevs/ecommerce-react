// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9vNCCMZ_mlJVw3rwNjNZ7D8yDIv8rzn4",
  authDomain: "bazarapp-1236d.firebaseapp.com",
  projectId: "bazarapp-1236d",
  storageBucket: "bazarapp-1236d.appspot.com",
  messagingSenderId: "710757423800",
  appId: "1:710757423800:web:5077b336e15c0040acb24d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);