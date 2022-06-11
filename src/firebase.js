// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD058nKqJiHVAyMvEpIGI_gAh3NycMk3SQ',
  authDomain: 'todo-crud-9cbbb.firebaseapp.com',
  projectId: 'todo-crud-9cbbb',
  storageBucket: 'todo-crud-9cbbb.appspot.com',
  messagingSenderId: '338758423795',
  appId: '1:338758423795:web:ee667413ac45af216bd386',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
