// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
//import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

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
var dataRef2  = ref(database, 'User2/');
console.log("initial dataRef2 = "+dataRef2);
const dataRefChat  = ref(database, 'Chatbox/');
const dataRefActive  = ref(database, 'ActiveUsers/');

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

/*
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
  } else if(language == 'Fortran' ){
    aceEditor.session.setMode("ace/mode/fortran");
    languageCode = 'fortran';
  } else if(language == 'c' ){
    aceEditor.session.setMode("ace/mode/c_cpp");
    languageCode = 'c';
  } else if(language == 'Perl' ){
    aceEditor.session.setMode("ace/mode/perl");
    languageCode = 'perl';
  } else if(language == 'PHP' ){
    aceEditor.session.setMode("ace/mode/php");
    languageCode = 'php';
  } else if(language == 'Ruby' ){
    aceEditor.session.setMode("ace/mode/ruby");
    languageCode = 'ruby';
  } else if(language == 'Haskell' ){
    aceEditor.session.setMode("ace/mode/haskell");
    languageCode = 'haskell';
  } else if(language == 'Scala' ){
    aceEditor.session.setMode("ace/mode/scala");
    languageCode = 'scala';
  } else if(language == 'SQL' ){
    aceEditor.session.setMode("ace/mode/sql");
    languageCode = 'sql';
  } else if(language == 'Prolog' ){
    aceEditor.session.setMode("ace/mode/prolog");
    languageCode = 'prolog';
  } else if(language == 'R Language' ){
    aceEditor.session.setMode("ace/mode/r");
    languageCode = 'r';
  } else if(language == 'Kotlin' ){
    aceEditor.session.setMode("ace/mode/kotlin");
    languageCode = 'kotlin';
  }
}*/

var language = 'java';
var languageCode = 'java';
//Change Language select section
window.changeLanguage = function changeLanguage(){
  let language = $("#languages").val();
  console.log("languages =" +language);
  switch(language){
    case 'c++':
      aceEditor.session.setMode("ace/mode/c_cpp");
      languageCode = 'cpp';
      break;
    case 'java':
      aceEditor.session.setMode("ace/mode/java");
      languageCode = 'java';
      break;
    case 'python':
      aceEditor.session.setMode("ace/mode/python");
      languageCode = 'python3';
      break;
    case 'node':
      aceEditor.session.setMode("ace/mode/javascript");
      languageCode = 'nodejs';
      break;
    case 'Fortran':
      aceEditor.session.setMode("ace/mode/fortran");
      languageCode = 'fortran';
      break;
    case 'c':
      aceEditor.session.setMode("ace/mode/c_cpp");
      languageCode = 'c';
      break;
    case 'Perl':
      aceEditor.session.setMode("ace/mode/perl");
      languageCode = 'perl';
      break;
    case 'PHP':
      aceEditor.session.setMode("ace/mode/php");
      languageCode = 'php';
      break;
    case 'Ruby':
      aceEditor.session.setMode("ace/mode/ruby");
      languageCode = 'ruby';
      break;
    case 'Haskell':
      aceEditor.session.setMode("ace/mode/haskell");
      languageCode = 'haskell';
      break;
    case 'Scala':
      aceEditor.session.setMode("ace/mode/scala");
      languageCode = 'scala';
      break;
    case 'SQL':
      aceEditor.session.setMode("ace/mode/sql");
      languageCode = 'sql';
      break;
    case 'Prolog':
      aceEditor.session.setMode("ace/mode/prolog");
      languageCode = 'prolog';
      break;
    case 'R Language':
      aceEditor.session.setMode("ace/mode/r");
      languageCode = 'r';
    case 'Kotlin':
      aceEditor.session.setMode("ace/mode/kotlin");
      languageCode = 'kotlin';
      break;
    default:
      aceEditor.session.setMode("ace/mode/java");
      languageCode = 'java';
      break;
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


function updateChat(data)
{
  var chatInput = data.val().chatArea;;
  console.log("chatInput = "+chatInput);
  document.getElementById("chatArea").innerHTML = chatInput;
}


//------------Active User List-----------
var listUsers;
//function to retreive list of active users
function updateActiveUsers(data)
{
  var resultList;
  listUsers=data.val().list;
  var array = listUsers.split(',')
  for (let i=0;i<array.length-1;i++){
    //console.log("array[i] after = "+array[i]);
    document.getElementById("userList").value +="  - "+array[i] + " \r";
  }
}


//-------------------chat box---------------------
//function getter from chat box and setter into firebase
window.textPost =function textPost() 
{ 
  var chatInput = document.getElementById("chatArea").value;
//Add user data here
  chatInput+=document.getElementById("chatInput").value+"&#10;";
  //console.log("chatInput after in textPost() = "+chatInput);
  var jsedit = 
  {
    chatArea : chatInput
  };
  update(dataRefChat, jsedit);
  document.getElementById("chatInput").value = "";
}


// function to clear chat-box
window.textClear =function textClear() 
{ 
  chatInput="";
  var jsedit = 
  {
    chatArea : chatInput
  };
  update(dataRefChat, jsedit);
}


//-----------Switch user-----------

//change user Up
window.toggleUp =function toggleUp() 
{ 
  var nextUser;
  var arr = listUsers.split(',')
  var currentStudent = document.getElementById("EditorHeaderStudent").innerHTML;
  //console.log("currentStudent = "+currentStudent);
  //console.log("arr.length = "+arr.length);
  for (let i=arr.length-2;i>=0;i--){
    //console.log("i  = "+i);
    if (arr[i]== currentStudent && arr[i-1]!=null){
      //console.log("arr[i] if trigger = "+arr[i-1]);
      nextUser = 'users/'+arr[i-1]+'/';
      currentStudent = arr[i-1];
      dataRef2  = ref(database, nextUser);
      console.log("nextUser = "+nextUser);
      break;
    }else if (arr[i]==arr[0]){
      //console.log("arr[0] else trigger = "+arr[arr.length-2]);
      nextUser = 'users/'+arr[arr.length-2]+'/';
      currentStudent = arr[arr.length-2];
      dataRef2  = ref(database, nextUser);
      console.log("nextUser = "+nextUser);
      //document.getElementById("EditorHeaderStudent").innerHTML=currentStudent;
    }
  }
  //dataRef2  = ref(database, 'User2/');
  document.getElementById("EditorHeaderStudent").innerHTML=currentStudent;
  //$("#editor2").load(" #editor2");
  //$("#output2").load(window.location.href + " #output2");
  onValue(dataRef2, updateEditor2);
}

//change user Down
window.toggleDown =function toggleDown() 
{ 
  var nextUser;
  var arr = listUsers.split(',')
  var currentStudent = document.getElementById("EditorHeaderStudent").innerHTML;
  //console.log("currentStudent = "+currentStudent);
  //console.log("arr.length = "+arr.length);
  for (let i=0;i<arr.length-1;i++){
    //console.log("i  = "+i);
    if (arr[i]== currentStudent && arr[i+1]!=null){
      //console.log("arr[i] if trigger = "+arr[i+1]);
      nextUser = 'users/'+arr[i+1]+'/';
      currentStudent = arr[i+1];
      dataRef2  = ref(database, nextUser);
      console.log("nextUser = "+nextUser);
      console.log("dataRef2 = "+dataRef2);
      break;
    }else if (arr[i]==arr[arr.length-3]){
      //console.log("arr[0] else trigger = "+arr[0]);
      nextUser = 'users/'+arr[0]+'/';
      currentStudent = arr[0];
      dataRef2  = ref(database, nextUser);
      console.log("dataRef2 = "+dataRef2);
      //document.getElementById("EditorHeaderStudent").innerHTML=currentStudent;
    }
  }
  //dataRef2  = ref(database, 'User2/');
  document.getElementById("EditorHeaderStudent").innerHTML=currentStudent;
  onValue(dataRef2, updateEditor2);
}




//----Main-----
changeLanguage();
onValue(dataRef, updateEditor); //update editor from firebase
onValue(dataRef2, updateEditor2);
onValue(dataRefChat, updateChat);
onValue(dataRefActive, updateActiveUsers);
JsCodeArea.addEventListener('keyup', listenSetFirebase); //set firebase from key event



// Run button to compile code       
window.executeCode = function executeCode(){  
  var randomNumber = Math.floor(Math.random() * 100);

  var CodeArea=aceEditor.getSession().getValue();
  console.log("Output =" +CodeArea);
  console.log("languageCode =" +languageCode);
  console.log("randomNumber =" +randomNumber);
    var triggerData = 
    {
      codeLanguage : languageCode,
      codeTrigger : languageCode+CodeArea+randomNumber,
      codeCompiler: "compiling........"
    };
    update(dataRef, triggerData);
  //https://stackoverflow.com/questions/48755746/new-line-command-n-not-working-with-firebase-firestore-database-strings
}
