import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyD16H-1fi8Q2lRTcI4bobGq7GR0SnokLVc",
    authDomain: "realtimechat-92a40.firebaseapp.com",
    databaseURL: "https://realtimechat-92a40.firebaseio.com",
    projectId: "realtimechat-92a40",
    storageBucket: "realtimechat-92a40.appspot.com",
    messagingSenderId: "67426481326"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
