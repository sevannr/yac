import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD36OHliu460iWlkCKEQaHFTRiFPKNvjYs",
    authDomain: "chat-selectors-inmutable-sagas.firebaseapp.com",
    databaseURL: "https://chat-selectors-inmutable-sagas.firebaseio.com",
    projectId: "chat-selectors-inmutable-sagas",
    storageBucket: "chat-selectors-inmutable-sagas.appspot.com",
    messagingSenderId: "1080727804322",
    appId: "1:1080727804322:web:5e2082fd4637564b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;