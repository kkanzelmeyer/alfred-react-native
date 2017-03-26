import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD9kNzk2k2UDLXmCBCQsfvtH6HggxqPNPI',
  authDomain: 'alfred-d5f8a.firebaseapp.com',
  databaseURL: 'https://alfred-d5f8a.firebaseio.com',
  storageBucket: 'alfred-d5f8a.appspot.com',
  messagingSenderId: '171415876070'
}

firebase.initializeApp(config)

const storage = firebase.storage()
const storageRef = storage.ref()
export const visitorsRef = storageRef.child('visitors')
