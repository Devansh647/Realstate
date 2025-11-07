// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDulJe_tNcG8CPCdR3dSUfcRnZyyPxDEOU",
    authDomain: "real-estate-92eea.firebaseapp.com",
    projectId: "real-estate-92eea",
    storageBucket: "real-estate-92eea.firebasestorage.app",
    messagingSenderId: "992365204809",
    appId: "1:992365204809:web:f3ecf08f1bc9446e8bf698",
    measurementId: "G-3HBDYWTZR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);