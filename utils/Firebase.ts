import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBlssZ35JrMrre2r87IkSWw_8eZrOFuFs8",
    authDomain: "infinity-chat-4fb97.firebaseapp.com",
    projectId: "infinity-chat-4fb97",
    storageBucket: "infinity-chat-4fb97.appspot.com",
    messagingSenderId: "435279574028",
    appId: "1:435279574028:web:d49cdd5cf8216350e1aa29",
    measurementId: "G-JRSX3E9946"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);


// import firebase from 'firebase/app';
// import 'firebase/auth';

// import { getFirestore } from "firebase/firestore";
// import { EmailAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";


// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
