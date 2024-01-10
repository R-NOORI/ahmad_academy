import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB6N_noibFm5USDSr1FG9Fi5G2PuhXODwA',
  authDomain: 'ahmad-academy-cc3f7.firebaseapp.com',
  projectId: 'ahmad-academy-cc3f7',
  storageBucket: 'ahmad-academy-cc3f7.appspot.com',
  messagingSenderId: '1028392134597',
  appId: '1:1028392134597:web:f0de210fb2310c0bf88dac',
  // measurementId: 'G-T0EJ1BHL1K',
}

firebase.initializeApp(firebaseConfig)

const dbStorage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { dbStorage, db, timestamp, auth, firebase }
