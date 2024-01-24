// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDooU97Tn4mMyBWMGy64gf_g18Rq6cz-bc",
  authDomain: "movies-webapp-6bf89.firebaseapp.com",
  projectId: "movies-webapp-6bf89",
  storageBucket: "movies-webapp-6bf89.appspot.com",
  messagingSenderId: "537637453080",
  appId: "1:537637453080:web:6fc6120c5040d587fb326d",
  measurementId: "G-1BZCJ7BG8H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
