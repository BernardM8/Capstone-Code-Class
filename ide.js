
//export default function getEditor()
//{return editor;}
import * as firebaseModule from './firebase.mjs';

let editor
let session


//// Create ACE
window.onload = function(){
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  session = editor.getSession();
  //session.setUseWrapMode(true);
  //session.setUseWorker(false);
  editor.session.setMode("ace/mode/c_cpp");
}


const JsCodeArea = document.getElementById("editor");
JsCodeArea.addEventListener('input', firebaseModule.Listener(editor));


//Change Languae select section
function changeLanguage(){
  let language = $("#languages").val();
  if(language == 'java' )editor.session.setMode("lib/ace/mode/java");
  else if(language == 'python' )editor.session.setMode("lib/ace/mode/python");
  else if(language == 'node' )editor.session.setMode("lib/ace/mode/javascript");
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