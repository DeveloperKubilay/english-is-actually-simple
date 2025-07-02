// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnEA2riSe6DQb-hd62ZNwepMAwkF-rdpg",
  authDomain: "english-learning-2e71e.firebaseapp.com",
  projectId: "english-learning-2e71e",
  storageBucket: "english-learning-2e71e.firebasestorage.app",
  messagingSenderId: "661182094495",
  appId: "1:661182094495:web:56d7eba62a6567091816aa",
  measurementId: "G-99YNNKJ4T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
