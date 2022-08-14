// import firebase from "firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDMKYFfhihpY2KqRNPBbd877oKUiFtspUI",
    authDomain: "disneyplus-clone-87e55.firebaseapp.com",
    projectId: "disneyplus-clone-87e55",
    storageBucket: "disneyplus-clone-87e55.appspot.com",
    messagingSenderId: "916402522147",
    appId: "1:916402522147:web:49773f9e5433ab08234996"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db;