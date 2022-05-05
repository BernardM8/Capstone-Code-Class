// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
//import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";


const firebaseConfig = {//Personal Firebase
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
// Firebase configuration
const firebaseConfig = { //Group Firebase
  apiKey: "AIzaSyDICcooHUciQZvAs_dPpExVxqBhtJMojbY",
  authDomain: "codelab-database-1.firebaseapp.com",
  databaseURL: "https://codelab-database-1-default-rtdb.firebaseio.com",
  projectId: "codelab-database-1",
  storageBucket: "codelab-database-1.appspot.com",
  messagingSenderId: "573387563239",
  appId: "1:573387563239:web:161f23412c218ba50ac242",
  measurementId: "G-4XTVC35JQL"
};
*/



// Initialize Firebase editor
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/');
const dataRef2  = ref(database, 'User2/');
const JsCodeArea = document.getElementById("editor");

// Create ACE editor
  const aceEditor = ace.edit("editor"); 
  aceEditor.setTheme("ace/theme/idle_fingers");
  const session = aceEditor.getSession();

// Create ACE editor 2
const aceEditor2 = ace.edit("editor2"); 
aceEditor2.setTheme("ace/theme/idle_fingers");
const session2 = aceEditor.getSession();
aceEditor2.session.setMode("ace/mode/c_cpp");
const JsCodeArea2 = document.getElementById("editor2");


var languageCode = 'cpp';
//Change Language select section
window.changeLanguage = function changeLanguage(){
  let language = $("#languages").val();
  if(language == 'c++' ){
    aceEditor.session.setMode("ace/mode/c_cpp");
    languageCode = 'cpp';
  } else if(language == 'java' ){
    aceEditor.session.setMode("ace/mode/java");
    languageCode = 'java';
  } else if(language == 'python' ){
    aceEditor.session.setMode("ace/mode/python");
    languageCode = 'python3';
  } else if(language == 'node' ){
    aceEditor.session.setMode("ace/mode/javascript");
    languageCode = 'nodejs';
  }
}

//Assign code problem select section
/*window.assignProblem = function assignProblem(){
  let mode = $("#assign").val();
  if(mode == 'timed' ){ 
    console.log("timed triggered");
    var CodeArea=aceEditor.getSession().getValue();
    //need to add setter to firebase
    aceEditor2.getSession().setValue(CodeArea, 1);
  }
  else if(mode == 'practice' ){
    console.log("practice triggered");
    var CodeArea=aceEditor.getSession().getValue();
    //need to add setter to firebase
    aceEditor2.getSession().setValue(CodeArea, 1);
  } 
}*/

//function getter from firbase and setter into ace editor
function updateEditor(data)
	{
    var cursorPosition = aceEditor.getCursorPosition();
    var txtarea = data.val().codeEditor;
    var compileArea = data.val().codeCompiler;
  
    //console.log("txtarea = "+txtarea);
    aceEditor.getSession().setValue(txtarea, 1); //set value in ace editor
    aceEditor.moveCursorToPosition(cursorPosition);
    document.getElementById("output").innerHTML = compileArea;
	}


  //function getter from firbase and setter into ace editor
function updateEditor2(data)
{
  var cursorPosition = aceEditor2.getCursorPosition();
  var txtarea = data.val().codeEditor;
  var compileArea = data.val().codeCompiler;

  //console.log("txtarea = "+txtarea);
  aceEditor2.getSession().setValue(txtarea, 1); //set value in ace editor
  aceEditor2.moveCursorToPosition(cursorPosition);
  document.getElementById("output2").innerHTML = compileArea;
}


//function getter from ace editor and setter into firebase
function listenSetFirebase(event) 
{ 
  console.log("check event.key: "+event.key);
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Listener = "+CodeArea);
  var jsedit = 
  {
    codeEditor : CodeArea
  };
  update(dataRef, jsedit);
}


//----Main-----
changeLanguage();
onValue(dataRef, updateEditor); //update editor from firebase
onValue(dataRef2, updateEditor2);
JsCodeArea.addEventListener('keyup', listenSetFirebase); //set firebase from key event



// Run button to compile code       
window.executeCode = function executeCode(){  
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Output =" +CodeArea);
  var triggerData = 
  {
    codeLanguage : languageCode,
    codeTrigger : languageCode+CodeArea
  };
  update(dataRef, triggerData);
  document.getElementById("output").innerHTML = "compiling........"; 

  //https://stackoverflow.com/questions/48755746/new-line-command-n-not-working-with-firebase-firestore-database-strings
}
