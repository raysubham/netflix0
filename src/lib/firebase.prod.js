import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCEmpxeSqEG6xc6Yr4c29uDebdU0LmZns4",
  authDomain: "netflix0.firebaseapp.com",
  databaseURL: "https://netflix0.firebaseio.com",
  projectId: "netflix0",
  storageBucket: "netflix0.appspot.com",
  messagingSenderId: "40612326350",
  appId: "1:40612326350:web:a072805db84c554771999f",
  measurementId: "G-128H4X9C3L",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
