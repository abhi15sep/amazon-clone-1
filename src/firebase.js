import firebase from 'firebase'

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyD234EDGW73EGOiBn-FJpo-XC7kNxHPL6A",
  authDomain: "store-clone-ui.firebaseapp.com",
  databaseURL: "https://store-clone-ui.firebaseio.com",
  projectId: "store-clone-ui",
  storageBucket: "store-clone-ui.appspot.com",
  messagingSenderId: "697115301136",
  appId: "1:697115301136:web:9bb4565fce268ec83ec195",
  measurementId: "G-GYV7WYC4CQ"
})
  
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db, auth}
