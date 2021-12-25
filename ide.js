import Firebase from './firebase.mjs';

var aceEditor
var session


//// Create ACE
window.onload = function(){
  aceEditor = ace.edit("editor");
  aceEditor.setTheme("ace/theme/monokai");
  session = aceEditor.getSession();
  //session.setUseWrapMode(true);
  //session.setUseWorker(false);
  aceEditor.session.setMode("ace/mode/c_cpp");
}


//const JsCodeArea = document.getElementById("editor");

var firebase1=new Firebase();
firebase1.updateEditor(aceEditor)
//editor.setValue(data);

//var txtarea=firebase1.getCode(aceEditor);
//console.log("txtarea returned = "+txtarea);

//aceEditor.setValue(txtarea);
//JsCodeArea.addEventListener('input', firebase1.Listener(aceEditor));


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