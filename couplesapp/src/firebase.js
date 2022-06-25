import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMuf80QpIGFxThtGK9-fKPMPgnTVrVuA0",
    authDomain: "couple-connect.firebaseapp.com",
    projectId: "couple-connect",
    storageBucket: "couple-connect.appspot.com",
    messagingSenderId: "226283882078",
    appId: "1:226283882078:web:9a762cf33aee7ee77956cf"
  };

  // passing firebaseConfig through app
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database; 
  