import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC3THaWHCIQQEHhDprShkgPXAr1S-VhEIU",
    authDomain: "initial-expo-react-native.firebaseapp.com",
    projectId: "initial-expo-react-native",
    storageBucket: "initial-expo-react-native.appspot.com",
    messagingSenderId: "292977450220",
    appId: "1:292977450220:web:19530e610b004d93df59c9",
    measurementId: "G-Z4T6P5E62Y"
};


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { firebase }
