// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Uglq_9t3J7algT4xEofvUqndxzWzZ7g",
  authDomain: "shoe-savant-task.firebaseapp.com",
  projectId: "shoe-savant-task",
  storageBucket: "shoe-savant-task.appspot.com",
  messagingSenderId: "902651912246",
  appId: "1:902651912246:web:553475baa69d450cb6f897"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);