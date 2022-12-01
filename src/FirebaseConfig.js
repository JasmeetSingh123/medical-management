// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtovXEjW7SskpB3bVuZOV_w9K5-SbK0ro",
  authDomain: "med-ma-react.firebaseapp.com",
  projectId: "med-ma-react",
  storageBucket: "med-ma-react.appspot.com",
  messagingSenderId: "933985992616",
  appId: "1:933985992616:web:cdb597b7c577e9606da79d",
  measurementId: "G-51YFGMFQYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const fs=firebase.firestore();
const storage=firebase.storage();

export {auth,fs,storage};