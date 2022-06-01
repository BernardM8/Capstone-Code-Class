import { getDatabase, ref, set, onValue, update, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
import { getAuth, setPersistence, onAuthStateChanged, browserSessionPersistence} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";


var firebaseConfig = {
  apiKey: "AIzaSyD3M9j2pGKraAnDOHOx0JdZOvblyj-84x4",
  authDomain: "capstone-ide.firebaseapp.com",
  databaseURL: "https://capstone-ide-default-rtdb.firebaseio.com",
  projectId: "capstone-ide",
  storageBucket: "capstone-ide.appspot.com",
  messagingSenderId: "402917015039",
  appId: "1:402917015039:web:98a9c4b13ea95de44fbbca",
  measurementId: "G-Z3ECK6ZW3K"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize variables
  //const auth = firebase.auth()
  const database = firebase.database()
  
  const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  let btn2 = document.getElementById("login")
btn2.addEventListener("click", function() {
  // Get all our input fields
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return 
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.full_name).update(user_data)

    user.onAuthStateChanged
    //document.cookie=user.full_name;

    // DOne
    window.location.href = "https://codeclass-ide-navhome.web.app"

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
});




// Validate Functions
function validate_email(email) {
  var expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
