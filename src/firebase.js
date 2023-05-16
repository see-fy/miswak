// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkSksbW8DztfBJmIMOhKs0xj9W5GsXc6o",
  authDomain: "miswak-2e370.firebaseapp.com",
  projectId: "miswak-2e370",
  storageBucket: "miswak-2e370.appspot.com",
  messagingSenderId: "1058513897087",
  appId: "1:1058513897087:web:aa7cae557f6b4ebf93a14a",
  measurementId: "G-XGDQPTKMCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
