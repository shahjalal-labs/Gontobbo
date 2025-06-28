// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/* 
// Your web app's Firebase configuration
const firebaseConfig = {
  // import.meta.env
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}; */

const firebaseConfig = {

  apiKey: "AIzaSyBCe-hJggT0AuaoPNSSfWS3qOCFKeRq4iI",

  authDomain: "workelevate-e004f.firebaseapp.com",

  projectId: "workelevate-e004f",

  storageBucket: "workelevate-e004f.firebasestorage.app",

  messagingSenderId: "41854606506",

  appId: "1:41854606506:web:a4a0e5eeb89f22eb1cc4d3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
