// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtmJuPJINcuoUcUSeokiDtKcI0JKQUlLU",
  authDomain: "sabata-auth.firebaseapp.com",
  projectId: "sabata-auth",
  storageBucket: "sabata-auth.appspot.com",
  messagingSenderId: "182950837611",
  appId: "1:182950837611:web:b1ee50773bb6bfef16a02e",
  measurementId: "G-72EN9TY63G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

export const projectAuth = getAuth(app);
