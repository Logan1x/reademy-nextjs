import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'reademy-432bb.firebaseapp.com',
  projectId: 'reademy-432bb',
  storageBucket: 'reademy-432bb.appspot.com',
  messagingSenderId: '143935505342',
  appId: '1:143935505342:web:2a685259449d9422ed2fef',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

export default firebase
