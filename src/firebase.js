import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBZv2tOJ3-gzaozEYe74X9Ig4MZe5YQp0A",
    authDomain: "react-task-tracker-cf4b4.firebaseapp.com",
    projectId: "react-task-tracker-cf4b4",
    storageBucket: "react-task-tracker-cf4b4.appspot.com",
    messagingSenderId: "502350373966",
    appId: "1:502350373966:web:bf564f3b715db4d252cf1f",
    measurementId: "G-MVSS0DSR0Z"
};

firebase.initializeApp(firebaseConfig);

export default firebase;