import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2EF3n2yEUaojxeH4mg6kPobresU0qL_k",
    authDomain: "roomchat-mern.firebaseapp.com",
    databaseURL: "https://roomchat-mern.firebaseio.com",
    projectId: "roomchat-mern",
    storageBucket: "roomchat-mern.appspot.com",
    messagingSenderId: "52122522331",
    appId: "1:52122522331:web:eacf94c7f6d85b65bdb2fe"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };