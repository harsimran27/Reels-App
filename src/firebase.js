import firebase from "firebase/app";
import config from "./config";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

firebase.initializeApp(config);

let provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const signInWithGoogle = () => {

    auth.signInWithPopup(provider);

};

export default firebase;