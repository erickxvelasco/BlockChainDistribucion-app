import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBUj3JoMQDWS0dFD4XjyRcisnBpNiRWZvE",
    authDomain: "tssprodcarne.firebaseapp.com",
    databaseURL: "https://tssprodcarne-default-rtdb.firebaseio.com",
    projectId: "tssprodcarne",
    storageBucket: "tssprodcarne.appspot.com",
    messagingSenderId: "209403260172",
    appId: "1:209403260172:web:9152835ae2b1a91e52ed29",
    measurementId: "G-5VQZR7EQ9Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databaseMiApp = getDatabase(app);
export {app,databaseMiApp};