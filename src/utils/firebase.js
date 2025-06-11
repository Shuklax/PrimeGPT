// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM5WB8mJOuiPO-ec2vrypRFpoQynGSzBo",
  authDomain: "primegpt-d2303.firebaseapp.com",
  projectId: "primegpt-d2303",
  storageBucket: "primegpt-d2303.firebasestorage.app",
  messagingSenderId: "179496915681",
  appId: "1:179496915681:web:4875dcd8abababdfc29da0",
  measurementId: "G-KT61S02TBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
