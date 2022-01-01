// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

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
// Initialize Firebase Globals
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/');
const JsCodeArea = document.getElementById("editor");


//// Create ACE
//window.onload = function(){
  const aceEditor = ace.edit("editor"); 
  aceEditor.setTheme("ace/theme/monokai");
  const session = aceEditor.getSession();
  //session.setUseWrapMode(true);
  //session.setUseWorker(false);
  aceEditor.session.setMode("ace/mode/c_cpp");
//}


//Change Language select section
window.changeLanguage = function changeLanguage(){
  let language = $("#languages").val();
  console.log("language = " + language)
  
  if(language == 'c++' ){
    aceEditor.session.setMode("ace/mode/c_cpp");
    console.log("check Ace editor scope = " + aceEditor);
  }
  else if(language == 'java' ){
    aceEditor.session.setMode("lib/ace/mode/java");
    console.log("check Ace editor scope = " + aceEditor);
  }
  else if(language == 'python' ){
    aceEditor.session.setMode("lib/ace/mode/python");
    console.log("check Ace editor scope = " + aceEditor);
  }
  else if(language == 'node' ){
    aceEditor.session.setMode("lib/ace/mode/javascript");
    console.log("check Ace editor scope = " + aceEditor);
  }
}


onValue(dataRef, updateEditor);
JsCodeArea.addEventListener('input', listenSetFirebase);


//function getter from firbase and setter into ace editor
function updateEditor(data)
		{
			var row = aceEditor.session.getLength() - 1
      var column = aceEditor.session.getLine(row).length // or simply Infinity
      var txtarea = data.val().codeEditor;
      console.log("txtarea = "+txtarea);
      aceEditor.getSession().setValue(txtarea, 1); //set value in ace editor
      //aceEditor.clearSelection();
      //aceEditor.navigateLineEnd();
      //ISSUE HERE https://stackoverflow.com/questions/27625028/how-to-move-the-cursor-to-the-end-of-the-line-in-ace-editor
      aceEditor.gotoLine(row + 1, column)
		}


//function getter from ace editor and setter for firebase
function listenSetFirebase() 
{ 
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Listener = "+CodeArea);
  var jsedit = 
  {
    codeEditor : CodeArea
  };
  set(dataRef, jsedit);
}



// Run button to compile code       
window.executeCode = function executeCode(){
  
  //var CodeArea= document.getElementById("editor").value;
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Output =" +CodeArea);
  document.getElementById("languages").innerHTML = CodeArea
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