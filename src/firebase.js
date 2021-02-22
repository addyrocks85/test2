import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOS2cpOC4VFcyUsEEJN_bsyTdkUfwze8g",
    authDomain: "atraxia-frontend.firebaseapp.com",
    projectId: "atraxia-frontend",
    storageBucket: "atraxia-frontend.appspot.com",
    messagingSenderId: "910150815293",
    appId: "1:910150815293:web:0dc2a9c09feeecd06e6454"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};