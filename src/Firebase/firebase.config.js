// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4AieKV2SxF6s42YHpbW0-OFKtXeEsjvA",
    authDomain: "web-courses-client.firebaseapp.com",
    projectId: "web-courses-client",
    storageBucket: "web-courses-client.appspot.com",
    messagingSenderId: "205853998921",
    appId: "1:205853998921:web:bd6f48688978a7f13a2498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;