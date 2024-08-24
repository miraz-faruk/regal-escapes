// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLJHy5osgr-l50TnF_k6ZAOWHwfQtdn7g",
    authDomain: "regal-escapes.firebaseapp.com",
    projectId: "regal-escapes",
    storageBucket: "regal-escapes.appspot.com",
    messagingSenderId: "192986598229",
    appId: "1:192986598229:web:c520d1d2d51166e5903ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;