// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuwFua1NTr3NDKRof8Nsu7C_KX9WIwEoQ",
  authDomain: "art-store-64ab6.firebaseapp.com",
  projectId: "art-store-64ab6",
  storageBucket: "art-store-64ab6.appspot.com",
  messagingSenderId: "952569516890",
  appId: "1:952569516890:web:7fea491614cda70d2ed963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;