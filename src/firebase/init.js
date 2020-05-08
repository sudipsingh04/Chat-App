import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCbeMZaK-xsGCGC7fNm5AYEjlX-YGkcHmY",
  authDomain: "sudip-chat.firebaseapp.com",
  databaseURL: "https://sudip-chat.firebaseio.com",
  projectId: "sudip-chat",
  storageBucket: "sudip-chat.appspot.com",
  messagingSenderId: "682473177592",
  appId: "1:682473177592:web:e46fdbc114cd3b9eb9160d",
  measurementId: "G-3Q7T3DRXXH"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()
