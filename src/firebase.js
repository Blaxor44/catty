import { initializeApp } from "firebase/app"
import {} from "firebase/auth"

import {} from "firebase/firestore"

import {} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBAIbq9zsPJKgETniBPYGnXuGKD7LX_ezM",
    authDomain: "catty-76793.firebaseapp.com",
    projectId: "catty-76793",
    storageBucket: "catty-76793.appspot.com",
    messagingSenderId: "449900050648",
    appId: "1:449900050648:web:96295de5287982c42d7fad"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage()

export { 
}
