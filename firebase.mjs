//Firebase section
import {editor} from "ide.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDICcooHUciQZvAs_dPpExVxqBhtJMojbY",
  authDomain: "codelab-database-1.firebaseapp.com",
  databaseURL: "https://codelab-database-1-default-rtdb.firebaseio.com",
  projectId: "codelab-database-1",
  storageBucket: "codelab-database-1.appspot.com",
  messagingSenderId: "573387563239",
  appId: "1:573387563239:web:161f23412c218ba50ac242",
  measurementId: "G-4XTVC35JQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/')


const JsCodeArea = document.getElementById("editor");

//let editor


JsCodeArea.addEventListener('input', Listener);
  onValue(dataRef, UpdateCodeEditor);


  //function for getter and set value in ace editor
  function UpdateCodeEditor(data)
  {
    //var txtarea = document.getElementById("editor");
    var txtarea = data.val().codeEditor;;
    //var txtarea = editor.session.getValue();
    console.log("txtarea = "+txtarea);
    if (txtarea == null||undefined){txtarea="";}
    
    //get value from firebase
    //else {txtarea.value = data.val().codeEditor;} 
    //document.getElementById("editor").value=
    editor.setValue(txtarea);
  }


  //function listener and setter for firebase
  function Listener() 
  { 
    var CodeArea=editor.getSession().getValue();
    //var CodeArea= document.getElementById("editor");
    console.log("Listener = "+CodeArea);

    var jsedit = 
    {
      //codeEditor : JsCodeArea.value
      codeEditor : CodeArea
    };
    set(dataRef, jsedit);
  }