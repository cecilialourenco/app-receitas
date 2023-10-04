// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC58mRAmFRrH6V96CM-4u-hTc0ebpVKvXI",
  authDomain: "o-que-tem-pra-comer-25d3a.firebaseapp.com",
  projectId: "o-que-tem-pra-comer-25d3a",
  storageBucket: "o-que-tem-pra-comer-25d3a.appspot.com",
  messagingSenderId: "940341918973",
  appId: "1:940341918973:web:821f3e528f6b3e8d3d1294",
  measurementId: "G-LE139732FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
