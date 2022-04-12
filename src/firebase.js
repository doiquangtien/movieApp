import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAyum8rxCTQMYWVn9H6bd54Tfa0OPjeMTU",
  authDomain: "movie-world-c0eee.firebaseapp.com",
  projectId: "movie-world-c0eee",
  storageBucket: "movie-world-c0eee.appspot.com",
  messagingSenderId: "555287344107",
  appId: "1:555287344107:web:3f644ed77e2bcb983ddfae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
