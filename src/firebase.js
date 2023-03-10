import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: 'AIzaSyBwDGl61ldJ1ZnedLrzty-5KPl30wYUHwA',
  authDomain: 'kyun-my-note.firebaseapp.com',
  projectId: 'kyun-my-note',
  storageBucket: 'kyun-my-note.appspot.com',
  messagingSenderId: '210492604911',
  appId: '1:210492604911:web:ec236baab9f2e007a3361a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
