import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // firebase
  apiKey: "AIzaSyAPaNezSZ9NCzf7JZijO2rsj6OnlguZ-6o",
  authDomain: "react-firebase-blog-fc6d6.firebaseapp.com",
  projectId: "react-firebase-blog-fc6d6",
  storageBucket: "react-firebase-blog-fc6d6.appspot.com",
  messagingSenderId: "692882014897",
  appId: "1:692882014897:web:ab22a2e459618d11a29890"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, db, storage , provider};
