import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBwgXIr-T3FE-JqriP3xIPvfDtyadXqi34',
  authDomain: 'discord-clone-4cdf2.firebaseapp.com',
  projectId: 'discord-clone-4cdf2',
  storageBucket: 'discord-clone-4cdf2.appspot.com',
  messagingSenderId: '952226517096',
  appId: '1:952226517096:web:2bd03d21e5d8b8418b6bdd',
  measurementId: 'G-54DXJZ87EF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
