import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCVOxKfiueNJ9xTm1aCy8LWZptkBfPYkE",
  authDomain: "foodsearch-daae9.firebaseapp.com",
  databaseURL: "https://foodsearch-daae9.firebaseio.com",
  projectId: "foodsearch-daae9",
  storageBucket: "foodsearch-daae9.appspot.com",
  messagingSenderId: "300015357984",
  appId: "1:300015357984:web:79af09d41f009a08feec45"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
