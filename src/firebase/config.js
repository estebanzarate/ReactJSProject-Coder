// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhHkM5I9Eb7ZzEfmb9845_3Xkj1trj3gE",
    authDomain: "reactjsproject-coder.firebaseapp.com",
    projectId: "reactjsproject-coder",
    storageBucket: "reactjsproject-coder.appspot.com",
    messagingSenderId: "141817620726",
    appId: "1:141817620726:web:a8696cee2b051329f724d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)