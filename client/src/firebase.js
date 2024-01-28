// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "marvel-mansions.firebaseapp.com",
  projectId: "marvel-mansions",
  storageBucket: "marvel-mansions.appspot.com",
  messagingSenderId: "228706425695",
  appId: "1:228706425695:web:89b78d5ad54944eb3234ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);