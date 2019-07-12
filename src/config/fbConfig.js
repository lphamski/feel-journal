import firebase from 'firebase/app'; //just base features
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAc23sAQ0ZNJLAKU86JpRBIwABJtbYEIa4",
    authDomain: "my-react-project-4e165.firebaseapp.com",
    databaseURL: "https://my-react-project-4e165.firebaseio.com",
    projectId: "my-react-project-4e165",
    storageBucket: "",
    messagingSenderId: "789407439012",
    appId: "1:789407439012:web:edb23f45a6e62859"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;