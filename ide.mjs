//Firebase section
//import { initializeApp,getDatabase, ref, set, onValue } from "ide.html";

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

let editor
let editor2
let session


//// Create ACE
window.onload = function(){
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  session = editor.getSession();
  //session.setUseWrapMode(true);
  //session.setUseWorker(false);
  editor.session.setMode("ace/mode/c_cpp");


  editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/monokai");
  session = editor2.getSession();
  editor2.session.setMode("ace/mode/c_cpp");
}

//Change Languae select section
function changeLanguage(){
  let language = $("#languages").val();
  if(language == 'java' )editor.session.setMode("lib/ace/mode/java");
  else if(language == 'python' )editor.session.setMode("lib/ace/mode/python");
  else if(language == 'node' )editor.session.setMode("lib/ace/mode/javascript");
}

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

// Run button to compile code       
function executeCode(){
  
  //var CodeArea= document.getElementById("editor").value;
  var CodeArea=editor.getSession().getValue();
  console.log(CodeArea);
  //console.log(CodeArea.childNodes[0]);
  //Sockets
  /*var socket = io('http://localhost');
      socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });*/
    
  //import { Socket } from "dgram";
    /*var net = require('net');
    var host = '10.0.0.63';
    var port = 8080;

    var socket = new net.Socket();
    socket.connect(port, host, () => {
    socket.write('GET / HTTP/1.0\r\n\r\n');
    socket.write('language: '+'$("#languages").val()'+'\r\n');
    socket.write('message: '+'editor.getSession().getValue()'+'\r\n');
    });

    socket.on('data', (data) => {
    console.log(`${data}`);
    socket.destroy();
    });*/
    
    //Still working on 
    /*$.ajax({
        //url: "ide/app/compiler.php",
        url: "compiler.js",
        method: "POST",
        data:{
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },
        success: function(response){
            $(".output").text(response)
        }
    })*/
}