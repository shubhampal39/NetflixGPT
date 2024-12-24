// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzb9StEEpnGv2yEGgXWc8HuU5VZH2a0vw",
    authDomain: "netflixgpt-ece3d.firebaseapp.com",
    projectId: "netflixgpt-ece3d",
    storageBucket: "netflixgpt-ece3d.firebasestorage.app",
    messagingSenderId: "297514837211",
    appId: "1:297514837211:web:64ee14155aa17e479218fe",
    measurementId: "G-LSKM14B114",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
