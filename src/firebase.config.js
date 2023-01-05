import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKxzxohEmwC6Gno8qmR9Ut8mSwihlAKqM",
  authDomain: "bakiyad-d81a2.firebaseapp.com",
  databaseURL: "https://bakiyad-d81a2-default-rtdb.firebaseio.com",
  projectId: "bakiyad-d81a2",
  storageBucket: "bakiyad-d81a2.appspot.com",
  messagingSenderId: "985019151306",
  appId: "1:985019151306:web:b6e29de59d97628e9d5533",
};

const app = getApps.length>0?getApp():initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};