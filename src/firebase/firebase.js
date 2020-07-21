const firebase =  require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCGW-b4tDQsXbwsSYupT1JmrqpTP9z2_7k',
  authDomain: 'e-commerce-c9a32.firebaseapp.com',
  databaseURL: 'https://e-commerce-c9a32.firebaseio.com',
  projectId: 'e-commerce-c9a32',
  storageBucket: 'e-commerce-c9a32.appspot.com',
  messagingSenderId: '192376451513',
  appId: '1:192376451513:web:21e3e76f6897e4b2dec668',
  measurementId: 'G-LMDX9BKGZC',
};

let initialize = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export const facebookAuth = new firebase.auth.FacebookAuthProvider();
export const twitterAuth = new firebase.auth.TwitterAuthProvider();

export const database = firebase.firestore(initialize);

export const PersistanceLocal = firebase.auth.Auth.Persistence.LOCAL;
export const PersistanceSession = firebase.auth.Auth.Persistence.SESSION;
