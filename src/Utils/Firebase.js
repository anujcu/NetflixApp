// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfkXCsmBq8-hcDw37MdJF37n9EaLwXjDY",
  authDomain: "anujcu-6e0db.firebaseapp.com",
  projectId: "anujcu-6e0db",
  storageBucket: "anujcu-6e0db.appspot.com",
  messagingSenderId: "704859005749",
  appId: "1:704859005749:web:6b3def8b347f5467e8e27c",
  measurementId: "G-TC4P7PCYSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);