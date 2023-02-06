import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDx0IKwLQr7GEdhUmn9kaDt4euJwMbzefQ",
  authDomain: "quickpolls-cd21c.firebaseapp.com",
  projectId: "quickpolls-cd21c",
  storageBucket: "quickpolls-cd21c.appspot.com",
  messagingSenderId: "167664827852",
  appId: "1:167664827852:web:5c16c52c5f0a687507f169"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();