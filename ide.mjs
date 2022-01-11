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

// Initialize Firebase editor
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/');
const JsCodeArea = document.getElementById("editor");


// Create ACE editor
//window.onload = function(){
  const aceEditor = ace.edit("editor"); 
  aceEditor.setTheme("ace/theme/monokai");
  const session = aceEditor.getSession();
  //session.setUseWrapMode(true);
  //session.setUseWorker(false);
//}

// Create ACE editor 2
const aceEditor2 = ace.edit("editor2"); 
aceEditor2.setTheme("ace/theme/monokai");
const session2 = aceEditor.getSession();
aceEditor2.session.setMode("ace/mode/c_cpp");
const JsCodeArea2 = document.getElementById("editor2");

//Change Language select section
window.changeLanguage = function changeLanguage(){
  let language = $("#languages").val();
  if(language == 'c++' ){aceEditor.session.setMode("ace/mode/c_cpp");}
  else if(language == 'java' ){aceEditor.session.setMode("ace/mode/java");}
  else if(language == 'python' ){aceEditor.session.setMode("ace/mode/python");}
  else if(language == 'node' ){aceEditor.session.setMode("ace/mode/javascript");}
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

/*
changeLanguage();
onValue(dataRef, updateEditor);
JsCodeArea.addEventListener('keydown', listenSetFirebase(event));
*/

//function getter from firbase and setter into ace editor
function updateEditor(data)
		{
			//var row = aceEditor.session.getLength() - 1;
      //var column = aceEditor.session.getLine(row).length; 
      var cursorPosition = aceEditor.getCursorPosition();
      var txtarea = data.val().codeEditor;
      console.log("txtarea = "+txtarea);
      aceEditor.getSession().setValue(txtarea, 1); //set value in ace editor
      //aceEditor.clearSelection();
      //aceEditor.navigateLineEnd();
      //ISSUE HERE https://stackoverflow.com/questions/27625028/how-to-move-the-cursor-to-the-end-of-the-line-in-ace-editor
      //aceEditor.gotoLine(row + 1, column);
      aceEditor.moveCursorToPosition(cursorPosition);
		}


//function getter from ace editor and setter for firebase
function listenSetFirebase(event) 
{ 
  console.log("check event.key: "+event.key);

  if (event.key==="Backspace"||event.key==="Delete"){
    console.log("Backspace or Delete detected: "+event.key);
  }/*
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Listener = "+CodeArea);
  var jsedit = 
  {
    codeEditor : CodeArea
  };
  set(dataRef, jsedit);
  */
 try{
    var CodeArea=await aceEditor.getSession().getValue();
    console.log("Listener = "+CodeArea);
    var jsedit = 
    {
      codeEditor : CodeArea
    };
    set(dataRef, jsedit);
  }catch(err){
    console.log("error: "+err)
  }
}


changeLanguage();
//onValue(dataRef, updateEditor); //update editor from firebase
JsCodeArea.addEventListener('keydown', listenSetFirebase); //set firebase from key event
onValue(dataRef, updateEditor); //update editor from firebase


// Run button to compile code       
window.executeCode = function executeCode(){
  //var CodeArea= document.getElementById("editor").value;
  var CodeArea=aceEditor.getSession().getValue();
  console.log("Output =" +CodeArea);
  document.getElementById("output").innerHTML = CodeArea
  
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