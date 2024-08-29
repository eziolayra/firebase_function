import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXpsp2a6djyCD8LaJwJKAZDPMpwVjOnKU",
  authDomain: "learning-firebase-dcebf.firebaseapp.com",
  projectId: "learning-firebase-dcebf",
  storageBucket: "learning-firebase-dcebf.appspot.com",
  messagingSenderId: "828126950593",
  appId: "1:828126950593:web:dd0d8d6d17fcb707e79040",
  measurementId: "G-Z9SV0KTDTY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firestore = getFirestore(app);

export { app, firestore, auth };
