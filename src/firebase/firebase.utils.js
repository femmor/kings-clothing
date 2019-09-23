import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB40kkDpAhAbki9j0-nO-6Jk_qE6BI4Le4",
  authDomain: "kings-db.firebaseapp.com",
  databaseURL: "https://kings-db.firebaseio.com",
  projectId: "kings-db",
  storageBucket: "",
  messagingSenderId: "432494407877",
  appId: "1:432494407877:web:df2dad1e9ad2a36c3d40ac"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
