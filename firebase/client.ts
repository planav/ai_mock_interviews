// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH5T7Orf2TIzixLr9cMcd39hWuxatdII0",
    authDomain: "prepwise-4bbcd.firebaseapp.com",
    projectId: "prepwise-4bbcd",
    storageBucket: "prepwise-4bbcd.firebasestorage.app",
    messagingSenderId: "1047753767712",
    appId: "1:1047753767712:web:27b2e3009df02a1977f545",
    measurementId: "G-2KP5R5RBE5"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
