// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0-5_oHbo4lDaZBP5kwKmVsEkCvx4Xtgk",
  authDomain: "contactapp-8bad9.firebaseapp.com",
  projectId: "contactapp-8bad9",
  storageBucket: "contactapp-8bad9.appspot.com",
  messagingSenderId: "207388719039",
  appId: "1:207388719039:web:f4d1a9195361aac414530a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);