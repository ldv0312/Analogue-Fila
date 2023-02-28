import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVfMSW6Xj-1MMRq3wY5Y5v1Bl0mtJI13g",
  authDomain: "fila-com.firebaseapp.com",
  projectId: "fila-com",
  storageBucket: "fila-com.appspot.com",
  messagingSenderId: "310620705921",
  appId: "1:310620705921:web:4df0efde4053877a6ae980",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
