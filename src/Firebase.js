// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Y1-VhVpQYONcrwiNO97vqz1s7d06cwA",
  authDomain: "gt-chat-ai.firebaseapp.com",
  projectId: "gt-chat-ai",
  storageBucket: "gt-chat-ai.appspot.com",
  messagingSenderId: "525565620728",
  appId: "1:525565620728:web:7ee99c06c13fd413b7a60d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
