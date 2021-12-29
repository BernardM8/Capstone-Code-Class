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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/');
const JsCodeArea = document.getElementById("editor");


//// Create ACE
//window.onload = function(){
  const aceEditor = ace.edit("editor"); //Global
  aceEditor.setTheme("ace/theme/monokai");
  const session = aceEditor.getSession();
  //session.setUseWrapMode(true);
  //session.setUseWorker(false);
  aceEditor.session.setMode("ace/mode/c_cpp");
//}


onValue(dataRef, updateEditor);
JsCodeArea.addEventListener('input', listenSetFirebase);
//onValue(dataRef, updateData);


//function getter from firbase and setter into ace editor
function updateEditor(data)
		{
			var txtarea = document.getElementById('editor');
			console.log("txtarea1"+txtarea);
      txtarea = data.val().userEdit;
      console.log("txtarea2"+txtarea);
      if (txtarea == null||undefined){txtarea="";}
      console.log("txtarea3"+txtarea);
      aceEditor.setValue(txtarea); //set value in ace editor
		}


//function getter from ace editor and setter for firebase
function listenSetFirebase() 
{ 
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Listener = "+CodeArea);
  var jsedit = 
  {
    //codeEditor : JsCodeArea.value
    codeEditor : CodeArea
  };
  set(dataRef, jsedit);
}


//Change Languae select section
function changeLanguage(){
  let language = $("#languages").val();
  if(language == 'java' )aceEditor.session.setMode("lib/ace/mode/java");
  else if(language == 'python' )aceEditor.session.setMode("lib/ace/mode/python");
  else if(language == 'node' )aceEditor.session.setMode("lib/ace/mode/javascript");
}


// Run button to compile code       
function executeCode(){
  
  //var CodeArea= document.getElementById("editor").value;
  var CodeArea=aceEditor.getSession().getValue();
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