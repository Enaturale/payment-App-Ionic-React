
import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// import{
//   ​​  //GoogleAuthProvider,
//   ​​  getAuth,
//   ​​  signInWithPopup,
//   ​​  signInWithEmailAndPassword,
//   ​​  createUserWithEmailAndPassword,
//   ​​  sendPasswordResetEmail,
//   ​​  signOut,
//   ​​} from "firebase/auth";

  // ​​import {
  //   ​​  getFirestore,
  //   ​​  query,
  //   ​​  getDocs,
  //   ​​  collection,
  //   ​​  where,
  //   ​​  addDoc,
  //   ​​} from "firebase/firestore";



const config = {
    apiKey: "AIzaSyBeVWPF0NUkOBWA5LxZ996Sm08UldQbjIA",
  authDomain: "paymentapp-9a5a1.firebaseapp.com",
  projectId: "paymentapp-9a5a1",
  storageBucket: "paymentapp-9a5a1.appspot.com",
  messagingSenderId: "190973124527",
  appId: "1:190973124527:web:e4fdee8de6b45aa519595a",
  measurementId: "G-25N4C6FBJH"

}
const app = initializeApp(config);
const auth = getAuth(app);

 export{auth}
 export {config}
 
//const db = getFirestore(app);

