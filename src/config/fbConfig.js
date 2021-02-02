import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWYoswKuWPFQQVl26XAgLplzbfHWkgeo8",
    authDomain: "experienceapp-b4ca5.firebaseapp.com",
    projectId: "experienceapp-b4ca5",
    storageBucket: "experienceapp-b4ca5.appspot.com",
    messagingSenderId: "263912846112",
    appId: "1:263912846112:web:92d3647ca81a3525e35d45",
    measurementId: "G-B4ZDRYZKBX"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  export default firebase;