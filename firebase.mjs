// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

export default class Firebase{

//Fields
//var app ;
//let database;
//let dataRef;


//constructor
constructor(){
// Firebase configuration
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
this.app = initializeApp(firebaseConfig);
this.database = getDatabase(app);
this.dataRef  = ref(database, 'User1/');
}

//const JsCodeArea = document.getElementById("editor");

//let editor


//JsCodeArea.addEventListener('input', Listener);
updateEditor(editor){
  return onValue(dataRef, UpdateCodeEditor(dataRef,editor));
}

  //function for getter and set value in ace editor
  UpdateCodeEditor(data,editor)
  {
    //var txtarea = document.getElementById("editor");
    var txtarea = data.val().codeEditor;;
    //var txtarea = editor.session.getValue();
    console.log("txtarea = "+txtarea);
    if (txtarea == null||undefined){txtarea="";}
    
    //get value from firebase
    //else {txtarea.value = data.val().codeEditor;} 
    //document.getElementById("editor").value=
    //editor.setValue(txtarea);
    return txtarea;
  }


  //function listener and setter for firebase
  Listener(editor) 
  { 
    var CodeArea=editor.getSession().getValue();
    console.log("Listener = "+CodeArea);

    var jsedit = 
    {
      //codeEditor : JsCodeArea.value
      codeEditor : CodeArea
    };
    set(dataRef, jsedit);
  }
}