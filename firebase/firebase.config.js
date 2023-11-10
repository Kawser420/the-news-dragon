// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUGW1iZQKF69q9F8e6vFY8m4sjh9HAQCE",
    authDomain: "the-news-dragon-97dd7.firebaseapp.com",
    projectId: "the-news-dragon-97dd7",
    storageBucket: "the-news-dragon-97dd7.appspot.com",
    messagingSenderId: "971182301926",
    appId: "1:971182301926:web:16528c1915f883982a5127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;