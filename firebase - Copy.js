import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { firestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDXLyoTSIRb1nKPGNw6HOctXjJ5cqraD9E",
//   authDomain: "challenge-84f2f.firebaseapp.com",
//   projectId: "challenge-84f2f",
//   storageBucket: "challenge-84f2f.appspot.com",
//   messagingSenderId: "510105002935",
//   appId: "1:510105002935:web:5982a047dfe321d5a4fe32",
//   measurementId: "G-HCBWD82WTS",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXLyoTSIRb1nKPGNw6HOctXjJ5cqraD9E",
  authDomain: "challenge-84f2f.firebaseapp.com",
  projectId: "challenge-84f2f",
  storageBucket: "challenge-84f2f.appspot.com",
  messagingSenderId: "510105002935",
  appId: "1:510105002935:web:5982a047dfe321d5a4fe32",
  measurementId: "G-HCBWD82WTS",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
const auth = getAuth(firebaseApp);

export { db, auth };
