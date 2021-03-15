import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAewTskOZqrYBErhizC47nOi9nFdeYgxnM',
  authDomain: 'robinhood-jmr-clone.firebaseapp.com',
  projectId: 'robinhood-jmr-clone',
  storageBucket: 'robinhood-jmr-clone.appspot.com',
  messagingSenderId: '954118022095',
  appId: '1:954118022095:web:be3832fad5e56708c3a8ba',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
