// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv_BOHVmEhtxoHZ8qH21CWoXf4iV1OqRg",
  authDomain: "lpu2-e92f0.firebaseapp.com",
  projectId: "lpu2-e92f0",
  storageBucket: "lpu2-e92f0.appspot.com",
  messagingSenderId: "1028445742311",
  appId: "1:1028445742311:web:f331b3c4394797c0176e42",
  measurementId: "G-8KBK1XWDLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth,app}