import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

export const auth = firebase.auth();
