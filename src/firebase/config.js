import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB5Sv7PKCvJR5aVYr3-7neDQ-T8w3AG9W0",
  authDomain: "sameer-firegram.firebaseapp.com",
  projectId: "sameer-firegram",
  storageBucket: "sameer-firegram.appspot.com",
  messagingSenderId: "534071419523",
  appId: "1:534071419523:web:41bb0fd7db84dc08ef71b6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFiresotre = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFiresotre, projectStorage, timestamp };
