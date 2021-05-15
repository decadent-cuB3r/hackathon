import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8c3nY43bLlPnALa3o4J3y9E5VuwGtusI",
  authDomain: "hackathon-b31d9.firebaseapp.com",
  projectId: "hackathon-b31d9",
  storageBucket: "hackathon-b31d9.appspot.com",
  messagingSenderId: "547999654172",
  appId: "1:547999654172:web:16f6434a5e98d8fd111ad9",
  measurementId: "G-3KJXK0V317"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}

export const registerWithEmailPassword = async (email, password, name) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({
    displayName: name,
  })
  return user;
}

export const signOut = () => {
  auth.signOut();
}