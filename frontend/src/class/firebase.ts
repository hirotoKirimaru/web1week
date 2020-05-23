import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyBEbK4fpdXQ1ZElfRmXarqfs6YHtwhiQpU',
  authDomain: 'web1week-e0f93.firebaseapp.com',
  databaseURL: 'https://web1week-e0f93.firebaseio.com',
  projectId: 'web1week-e0f93',
  storageBucket: 'web1week-e0f93.appspot.com',
  messagingSenderId: '355745787772',
  appId: '1:355745787772:web:ee1499104a77b925297ef9',
  measurementId: 'G-TN6LWT6HTK',
};

let loginUser: any = {};
let userStatus = false;

export default {
  init(): void {
    firebase.initializeApp(config);
    firebase.analytics();
    firebase
      .auth()
      .setPersistence(
        process.env.NODE_ENV === 'test'
          ? firebase.auth.Auth.Persistence.NONE
          : firebase.auth.Auth.Persistence.SESSION,
      );
  },
  login(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  logout(): Promise<void> {
    return firebase.auth().signOut();
  },
  currentUser(): Promise<void> {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          loginUser = user;
          userStatus = true;
        } else {
          loginUser = {};
          userStatus = false;
        }
        resolve();
      });
    });
  },
  findLoginUser(): any {
    return loginUser;
  },
  loginStatus(): any {
    return userStatus;
  },
};
