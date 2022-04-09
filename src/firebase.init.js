import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ecttkOPb3G4WPmE8CuSWU-FNdi-OloM",
  authDomain: "private-route-auth-244dc.firebaseapp.com",
  projectId: "private-route-auth-244dc",
  storageBucket: "private-route-auth-244dc.appspot.com",
  messagingSenderId: "1052762096770",
  appId: "1:1052762096770:web:028902872f6af52bd6e09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;