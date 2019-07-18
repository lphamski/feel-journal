import firebase from 'firebase/app'; //just base features
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE3EJpdunzTMjXL70EaYLi60kyqgvDZ3Q",
    authDomain: "mood-journal-10d30.firebaseapp.com",
    databaseURL: "https://mood-journal-10d30.firebaseio.com",
    projectId: "mood-journal-10d30",
    storageBucket: "mood-journal-10d30.appspot.com",
    messagingSenderId: "153740973670",
    appId: "1:153740973670:web:542787153149c194"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;