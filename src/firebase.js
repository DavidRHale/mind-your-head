import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCoObE64U2bzq3K9anGKwz34i1Xu1Kv0Og",
  authDomain: "mind-your-head.firebaseapp.com",
  databaseURL: "https://mind-your-head.firebaseio.com",
  projectId: "mind-your-head",
  storageBucket: "mind-your-head.appspot.com",
  messagingSenderId: "88025710564"
};
var fire = firebase.initializeApp(config);
export default fire;