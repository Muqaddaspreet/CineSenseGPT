// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ9HgZwu06e9-UqBtssJJD_Tvolhy2m6Y",
  authDomain: "cinesense-3f653.firebaseapp.com",
  projectId: "cinesense-3f653",
  storageBucket: "cinesense-3f653.firebasestorage.app",
  messagingSenderId: "479382439659",
  appId: "1:479382439659:web:19905e5cca89bb3871e0ae",
  measurementId: "G-Q9GPRCQFDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
