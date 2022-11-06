import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBxGa4XnUnpBLAFb6Y2NOXtF4rppNoMS28",
  authDomain: "react-netfix-clone.firebaseapp.com",
  projectId: "react-netfix-clone",
  storageBucket: "react-netfix-clone.appspot.com",
  messagingSenderId: "65312891817",
  appId: "1:65312891817:web:f54dadd1f15ee4ef54dab8",
  measurementId: "G-YGWK32T2CP"
};



const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);