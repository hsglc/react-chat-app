import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB_XI7U6vWWfw4CibU8WN7UAtNGEiiot74",
  authDomain: "chat-app-a4097.firebaseapp.com",
  projectId: "chat-app-a4097",
  storageBucket: "chat-app-a4097.appspot.com",
  messagingSenderId: "163690333217",
  appId: "1:163690333217:web:3da9971f86a881ab740f60"
}).auth()
