import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAK7Q8XRymWFkZR5XdoP8MppO6VWlZncU",
  authDomain: "schoolportal-df827.firebaseapp.com",
  databaseURL: "https://schoolportal-df827-default-rtdb.firebaseio.com",
  projectId: "schoolportal-df827",
  storageBucket: "schoolportal-df827.firebasestorage.app",
  messagingSenderId: "635937666585",
  appId: "1:635937666585:web:f612f45bcdcf8e238edc88",
  measurementId: "G-RH3PHHLC5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
