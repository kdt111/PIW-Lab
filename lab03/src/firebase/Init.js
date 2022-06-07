// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxqZpYabIiqzTizYNWA1du4BtrvD3Us1A",
  authDomain: "piw-lab-f905c.firebaseapp.com",
  projectId: "piw-lab-f905c",
  storageBucket: "piw-lab-f905c.appspot.com",
  messagingSenderId: "976256798073",
  appId: "1:976256798073:web:039e8718dac836164833a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
