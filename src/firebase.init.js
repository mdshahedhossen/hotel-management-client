// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR-Ehpa8kEh6QnF2wBrhoYV4Lm96weHIg",
  authDomain: "hotelmanagement-a0765.firebaseapp.com",
  projectId: "hotelmanagement-a0765",
  storageBucket: "hotelmanagement-a0765.appspot.com",
  messagingSenderId: "284885298095",
  appId: "1:284885298095:web:5b88ae2acede61a3ac9d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;