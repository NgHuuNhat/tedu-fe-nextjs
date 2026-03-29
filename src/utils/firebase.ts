// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3DVnNq-emd4dlEjcgqXCVqfRfudbeX7s",
    authDomain: "tedu-fe-nextjs.firebaseapp.com",
    projectId: "tedu-fe-nextjs",
    storageBucket: "tedu-fe-nextjs.firebasestorage.app",
    messagingSenderId: "281373355942",
    appId: "1:281373355942:web:ee6e60fd7e75dcf12b2967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// fire-store
const db = getFirestore(app) 

// storage

// authentication

export { app, db }