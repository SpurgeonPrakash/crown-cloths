import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBmTaThutsby7PgqCsEfBCpBisxMPF7WAw",
  authDomain: "crown-clothing-13896.firebaseapp.com",
  projectId: "crown-clothing-13896",
  storageBucket: "crown-clothing-13896.appspot.com",
  messagingSenderId: "727309586131",
  appId: "1:727309586131:web:eb4155c1328bd0eb6f0e26",
  measurementId: "G-RRWCR1CG7N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
