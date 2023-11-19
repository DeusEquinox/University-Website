import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCebGGckuSuuwCtgfJYwMEW4OhHjTroe8I",
    authDomain: "ctu-buddy-website.firebaseapp.com",
    projectId: "ctu-buddy-website",
    storageBucket: "ctu-buddy-website.appspot.com",
    messagingSenderId: "1057092388614",
    appId: "1:1057092388614:web:6616c27ca9366e61c44087"
  };

const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

import { getAuth } from "firebase/auth";
