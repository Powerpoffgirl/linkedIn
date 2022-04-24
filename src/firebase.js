import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD068f9E9-fruuKg48Fa3X0qCCDiS-mKH4",
    authDomain: "linkedin-d429f.firebaseapp.com",
    projectId: "linkedin-d429f",
    storageBucket: "linkedin-d429f.appspot.com",
    messagingSenderId: "261863377787",
    appId: "1:261863377787:web:405753bad70c0fe5b7cbde",
    measurementId: "G-3QF0TB48NB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};