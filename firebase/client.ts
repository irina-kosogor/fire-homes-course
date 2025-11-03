// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtWd0Pul2Hck-E_hfWMn4Z_cN2tT-0lxA",
  authDomain: "fire-homes-81af3.firebaseapp.com",
  projectId: "fire-homes-81af3",
  storageBucket: "fire-homes-81af3.firebasestorage.app",
  messagingSenderId: "112195595143",
  appId: "1:112195595143:web:73cc5f7a00244c2b054122"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    storage = getStorage(app);
} else {
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
}

export {auth, storage}