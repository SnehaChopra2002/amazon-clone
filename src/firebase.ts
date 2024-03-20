import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUbHO6gH-jhWR1AgUTaWU-Rumt1qACzn0",
  authDomain: "clone-4b98c.firebaseapp.com",
  projectId: "clone-4b98c",
  storageBucket: "clone-4b98c.appspot.com",
  messagingSenderId: "301215543115",
  appId: "1:301215543115:web:8004c231d7a0ce358502ce",
  measurementId: "G-F5ZGYL7G0G"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };