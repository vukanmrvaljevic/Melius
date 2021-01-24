import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD_6yNxi41oYMHk__0uLu5riEjdQRQjmEM",
  authDomain: "melius-development.firebaseapp.com",
  databaseURL: "https://melius-development-default-rtdb.firebaseio.com",
  projectId: "melius-development",
  storageBucket: "melius-development.appspot.com",
  messagingSenderId: "1059298642106",
  appId: "1:1059298642106:web:8d2295467e174334e51a83",
})

export const auth = firebase.auth()
export default app
