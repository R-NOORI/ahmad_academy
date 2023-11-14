import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAxmQBxGJMv9rGEUaAJxXArojDl2CxfbeU',
  authDomain: 'ahmad-academy.firebaseapp.com',
  projectId: 'ahmad-academy',
  storageBucket: 'ahmad-academy.appspot.com',
  messagingSenderId: '488096555472',
  appId: '1:488096555472:web:4ce499ae21b57defe259d5',
  measurementId: 'G-T0EJ1BHL1K',
}

firebase.initializeApp(firebaseConfig)

const dbStorage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { dbStorage, db, timestamp, auth, firebase }
