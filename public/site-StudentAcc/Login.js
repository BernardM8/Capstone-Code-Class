import { getDatabase, ref, set, onValue, update, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3M9j2pGKraAnDOHOx0JdZOvblyj-84x4",
  authDomain: "capstone-ide.firebaseapp.com",
  databaseURL: "https://capstone-ide-default-rtdb.firebaseio.com",
  projectId: "capstone-ide",
  storageBucket: "capstone-ide.appspot.com",
  messagingSenderId: "402917015039",
  appId: "1:402917015039:web:98a9c4b13ea95de44fbbca",
  measurementId: "G-Z3ECK6ZW3K"
};
/*
const firebaseConfig = {
  apiKey: "AIzaSyC0smKAfTO24yVrTc0HXY-Krtch09othQY",
  authDomain: "userloginregistration-a365f.firebaseapp.com",
  databaseURL: "https://userloginregistration-a365f-default-rtdb.firebaseio.com",
  projectId: "userloginregistration-a365f",
  storageBucket: "userloginregistration-a365f.appspot.com",
  messagingSenderId: "586687950561",
  appId: "1:586687950561:web:b01dfc2b663f64386791a0"
};*/
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function alertrando() {
  alert("hi");
}

function register() {
  email = document.getElementById('email').value;
  password = document.getElementById('psw').value;
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser
    var database_ref = database_ref = database.ref()
    var user_data = {
      email: email
    }
    alert('User Created!');
  })
.catch(function(error) {

})
}

function login() {
    var email = document.getElementById("email");
    var password = document.getElementById("psw");

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "CodeClassNaviHome.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

