// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEGvyLqydUsRtaII_D8-oyY_YRaw384AQ",
  authDomain: "myapp1-108ee.firebaseapp.com",
  projectId: "myapp1-108ee",
  storageBucket: "myapp1-108ee.firebasestorage.app",
  messagingSenderId: "56733317630",
  appId: "1:56733317630:web:3db8bfb1c03c4d181ea8af",
  measurementId: "G-3WEN852S6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
// const analytics = getAnalytics(app);