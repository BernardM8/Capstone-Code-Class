// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
export default class Firebase{

//constructor
constructor(editor){
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
var app = initializeApp(firebaseConfig);
var database = getDatabase(app);
var dataRef  = ref(database, 'User1/');
this.app  = app;
this.database  = database;
this.dataRef  = dataRef;
this.editor = editor;
this.text = "";
}


//JsCodeArea.addEventListener('input', Listener);


  /*//function for getter and set value in ace editor
  UpdateCodeEditor(editor,data)
  {
    //get value from firebase
    //var txtarea = data.val().codeEditor;
    //var txtarea = get(codeEditor);
    //console.log("txtarea = "+txtarea);
    console.log("data = "+data);
    //if (txtarea == null||undefined){txtarea="";}
    
    //set value in ace editor
    editor.setValue(data);
    //editor.setValue(txtarea);
    //return txtarea;
  }*/



  /*updateEditor(editor,data)
  {
    //set value in ace editor
    editor.setValue(data);
  }*/

  getCode(){
    
     onValue(this.dataRef, (snapshot)=>{
       const data = snapshot.val().codeEditor;
       console.log("data = "+ data);       
       //this.editor.setValue(data);
       //console.log("editor = "+ this.editor); 
       this.text=data;
       console.log("this.text1 = "+  this.text); 
       //updateEditor(data);
     });
     console.log("this.text2 = "+  this.text2); 
     return this.text;
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
    set(this.dataRef, jsedit);
  }
}