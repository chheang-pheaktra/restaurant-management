// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5EmKDbYvqOXqMnDpE-uWLWS7S7J6R3Nw",
  authDomain: "restaurant-89325.firebaseapp.com",
  databaseURL: "https://restaurant-89325-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-89325",
  storageBucket: "restaurant-89325.appspot.com",
  messagingSenderId: "727735699727",
  appId: "1:727735699727:web:49ffd9db3eaf3a6bfd967a",
  measurementId: "G-X5WKFD73EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const db=getFirestore(app);
 const storage=getStorage(app);
 export {db,storage}