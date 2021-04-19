// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAyABZLNTlhHo9Ey-GgbufDlLkIpK4JcY",
    authDomain: "clone-9872a.firebaseapp.com",
    projectId: "clone-9872a",
    storageBucket: "clone-9872a.appspot.com",
    messagingSenderId: "528661208319",
    appId: "1:528661208319:web:988b96d5455dd5a5dc00ca",
    measurementId: "G-XFZ69GJ8Z2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };