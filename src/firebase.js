import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9XEhUq9GHxanXCbb-XiK5iNHzsBQ-f-g",
  authDomain: "challenge-dcbcf.firebaseapp.com",
  databaseURL: "https://challenge-dcbcf.firebaseio.com",
  projectId: "challenge-dcbcf",
  storageBucket: "challenge-dcbcf.appspot.com",
  messagingSenderId: "124810160284",
  appId: "1:124810160284:web:b1ab7d4046b37d919aa559",
  measurementId: "G-FMWN6P4JCB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
