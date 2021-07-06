import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADOZq2gG6ofeaJ7iEj-FSZHsJLANrJId4",
  authDomain: "mycalendar-3c162.firebaseapp.com",
  projectId: "mycalendar-3c162",
  storageBucket: "mycalendar-3c162.appspot.com",
  messagingSenderId: "1044030626566",
  appId: "1:1044030626566:web:550ab1280cb5525d701c87",
  measurementId: "G-WHZXXHT7R6",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
