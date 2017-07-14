import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBDXJLrJ6Qk3TM3wUQCqdlx-0BEsrXQrDQ",
  authDomain: "links-d039d.firebaseapp.com",
  databaseURL: "https://links-d039d.firebaseio.com",
  projectId: "links-d039d",
  storageBucket: "",
  messagingSenderId: "1068204850982"
};

const firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.database()
