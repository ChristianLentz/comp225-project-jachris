/**
 * The index.js file handles the startup of the app, this is the first thing 
 * that we run! 
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 'https://gstatic.com/firebasejs/9.0.0/firebase-app.js'
import { getAuth, onAuthStateChanged } from "firebase/auth"; 'https://gstatic.com/firebasejs/9.0.0/firebase-auth.js'
import { getAnalytics } from "firebase/analytics"; 'https://gstatic.com/firebasejs/0.0.0/firebase-analytics.js'

// TODO: Add SDKs for Firebase products that you want to use
// TODO: Add a module bundler SDK !! 
// https://firebase.google.com/docs/web/setup#available-libraries

// Our Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnuNDOz0v2w4M78YHk8mUupDKWT073MSE",
  authDomain: "mac-community-trade-center.firebaseapp.com",
  projectId: "mac-community-trade-center",
  storageBucket: "mac-community-trade-center.appspot.com",
  messagingSenderId: "889714479210",
  appId: "1:889714479210:web:c6719ae19008c2da0eba13",
  measurementId: "G-DWMWXEG7BY"
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);

// Returns current auth instance 
const auth = getAuth(myApp); 

// Check / recored user login 
onAuthStateChanged(auth, user => { 
    if (user != null) { 
        console.log("logged in!"); 
    } else { 
        console.log("no user!"); 
    }
})

// Return analysitcs for given instance of the app 
const analytics = getAnalytics(myApp);