import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnDMabbPrJS9ZGP1Hh0r0ieb-kk54dNXk",
  authDomain: "the-health-report-back-end.firebaseapp.com",
  projectId: "the-health-report-back-end",
  storageBucket: "the-health-report-back-end.appspot.com",
  messagingSenderId: "424144671124",
  appId: "1:424144671124:web:6f79c34f0f7f1dfe96bf81",
  measurementId: "G-W2KNSQFF1T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);