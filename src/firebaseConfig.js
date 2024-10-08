// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUF3FLDwmy9w5zlXE8woFuUBvQhA1zSh4",
    authDomain: "prueba-m7-69c15.firebaseapp.com",
    projectId: "prueba-m7-69c15",
    storageBucket: "prueba-m7-69c15.appspot.com",
    messagingSenderId: "249180267507",
    appId: "1:249180267507:web:6d432603a454b1d08da886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }