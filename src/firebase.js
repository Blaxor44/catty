import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAIbq9zsPJKgETniBPYGnXuGKD7LX_ezM",
  authDomain: "catty-76793.firebaseapp.com",
  projectId: "catty-76793",
  storageBucket: "catty-76793.appspot.com",
  messagingSenderId: "449900050648",
  appId: "1:449900050648:web:96295de5287982c42d7fad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };