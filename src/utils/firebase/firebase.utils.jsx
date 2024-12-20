import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8YnhGDGwHpH4bYwXmbzm02BPLSDZvpw",
  authDomain: "jdb-clothing.firebaseapp.com",
  projectId: "jdb-clothing",
  storageBucket: "jdb-clothing.firebasestorage.app",
  messagingSenderId: "234933846213",
  appId: "1:234933846213:web:9023221874af969df1f0ac",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
