import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMDMIf_Ea7ve8qaP9EePkDTtV6e591oYE",
  authDomain: "authentication-40a73.firebaseapp.com",
  projectId: "authentication-40a73",
  storageBucket: "authentication-40a73.firebasestorage.app",
  messagingSenderId: "195198547116",
  appId: "1:195198547116:web:15284f3efff55a470adb09",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
