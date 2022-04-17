// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
//import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {request} from "request"; 
//import {CompilerFeature} from "./bundle.js";

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

// Initialize Firebase editor
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/');
const JsCodeArea = document.getElementById("editor");

// Create ACE editor
  const aceEditor = ace.edit("editor"); 
  aceEditor.setTheme("ace/theme/monokai");
  const session = aceEditor.getSession();

// Create ACE editor 2
const aceEditor2 = ace.edit("editor2"); 
aceEditor2.setTheme("ace/theme/monokai");
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
window.assignProblem = function assignProblem(){
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
}

//function getter from firbase and setter into ace editor
function updateEditor(data)
	{
    var cursorPosition = aceEditor.getCursorPosition();
    var txtarea = data.val().codeEditor;
    console.log("txtarea = "+txtarea);
    aceEditor.getSession().setValue(txtarea, 1); //set value in ace editor
    aceEditor.moveCursorToPosition(cursorPosition);
	}

//function getter from ace editor and setter for firebase
function listenSetFirebase(event) 
{ 
  console.log("check event.key: "+event.key);
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Listener = "+CodeArea);
  var jsedit = 
  {
    codeEditor : CodeArea
  };
  set(dataRef, jsedit);
}


//----Main-----
changeLanguage();
onValue(dataRef, updateEditor); //update editor from firebase
JsCodeArea.addEventListener('keyup', listenSetFirebase); //set firebase from key event



// method to submit/compile code 
function submitCode(callback,sourceCode,language){    
  return new Promise((resolve, reject) =>{
      setTimeout(()=>{
          //console.log('sourceCode: '+this.sourceCode);
          //console.log('language: '+this.language+'\n');        
          
          //request function POST
          request({
              url: 'https://api.jdoodle.com/v1/execute',
              method: 'POST',
              json: {
                script : sourceCode,
                language: language,
                versionIndex: "0",
                clientId: 'cab108faec1e851b720d54d302a6a9d6',
                clientSecret:'562fcedf8ff4ce99b4a81fceeda23aa8acf8176f1a083958ded6d7bf84bff5ea'
              }
          }, 

          function (error, response, body) {          
              if (error) {
                  console.log('Connection problem');
              }           
              // process response
              if (response) {
                  console.log('error: ', error);
                  console.log('statusCode:', response && response.statusCode);
                  console.log('body: ', body);
                  console.log('\n');

                  if (response.statusCode === 200) {
                      //var responseBody = JSON.parse(response.body); // output data in JSON
                      console.log('Compiled Output:', response.body.output);
                      resolve(response.body.output);              
                  
                  } else {
                      console.log('error: ', error);
                      reject();
                      /*
                      if (response.statusCode === 401) {
                          console.log('Invalid access token');
                      } else if (response.statusCode === 402) {
                          console.log('Unable to create submission');
                      } else if (response.statusCode === 400) {
                          var body = JSON.parse(response.body);
                          console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
                      }*/
                  }
              }
          });
      }, 2000);
  });     
}



// Run button to compile code       
window.executeCode = function executeCode(){  
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Output =" +CodeArea);
  
  var compiledOutput;
  var initializePromise=compiler.submitCode(CodeArea,languageCode);
  initializePromise.then(function(result){
    compiledOutput = result;
          console.log("Initialized details");
          // Use user details from here
          console.log(compiledOutput)
          document.getElementById("output").innerHTML = compiledOutput;
      }, function(err) {
          console.log(err);
      })
}


