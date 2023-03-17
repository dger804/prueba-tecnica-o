// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS2bKl0L0C0lSy2ABcmQn3Eb9pD31xq9A",
  authDomain: "auth-test-8fb17.firebaseapp.com",
  projectId: "auth-test-8fb17",
  storageBucket: "auth-test-8fb17.appspot.com",
  messagingSenderId: "121398120263",
  appId: "1:121398120263:web:c422f8cb28a5af74730662"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)