import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzynf7ENY2lio0hf_bmZw0DBAp8ub7B9E',
  authDomain: 'college-bowl-app.firebaseapp.com',
  databaseURL: 'https://college-bowl-app.firebaseio.com',
  projectId: 'college-bowl-app',
  storageBucket: '',
  messagingSenderId: '270544102236',
  appId: '1:270544102236:web:fc31511f23d2bf78'
};

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

export const firestore = firebase.firestore();

export const auth = firebase.auth();
