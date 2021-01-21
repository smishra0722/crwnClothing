import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNElZrW039foXRswF11dIEawWgZ29OlKQ",
    authDomain: "crwn-db-62cf7.firebaseapp.com",
    projectId: "crwn-db-62cf7",
    storageBucket: "crwn-db-62cf7.appspot.com",
    messagingSenderId: "974734937177",
    appId: "1:974734937177:web:ed566dbb8b1ac46920f548",
    measurementId: "G-3L9EJBHXHY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
