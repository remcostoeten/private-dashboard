import { getAuth } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZdnGJtM7rxzk7y7Ga1vKvGoHv8ja23e4",
  authDomain: "personal-panel---chat.firebaseapp.com",
  projectId: "personal-panel---chat",
  storageBucket: "personal-panel---chat.appspot.com",
  messagingSenderId: "534740783847",
  appId: "1:534740783847:web:2ba1ee44119c4d862a4842"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
