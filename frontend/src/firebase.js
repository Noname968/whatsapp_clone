import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDch59_ljWbINKHOeJF1N-O-FSGJ2ivNa8",
  authDomain: "whatsapp-clone-84359.firebaseapp.com",
  projectId: "whatsapp-clone-84359",
  storageBucket: "whatsapp-clone-84359.appspot.com",
  messagingSenderId: "602930044991",
  appId: "1:602930044991:web:1d0693df8f68a208b4988a",
  measurementId: "G-LB9LE0CME9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {auth, provider } 
export default db

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);