// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
//import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import ActiveUsers from "ActiveUsers"; 


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


// Initialize Firebase editor
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'User1/');
var dataRef2  = ref(database, 'User2/');
console.log("initial dataRef2 = "+dataRef2);
const dataRefChat  = ref(database, 'Chatbox/');
const dataRefActive  = ref(database, 'ActiveUsers/');
console.log()


// Create ACE text editor
const JsCodeArea = document.getElementById("editor");
const aceEditor = ace.edit("editor"); 
aceEditor.setTheme("ace/theme/idle_fingers");
const session = aceEditor.getSession();

// Create ACE text editor 2
const aceEditor2 = ace.edit("editor2"); 
aceEditor2.setTheme("ace/theme/idle_fingers");
const session2 = aceEditor.getSession();
aceEditor2.session.setMode("ace/mode/c_cpp");
const JsCodeArea2 = document.getElementById("editor2");

//Change Language select section
var language = 'java';
var languageCode = 'java';
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


//function getter from ace editor and setter into firebase
function listenSetFirebase(event) 
{ 
  var CodeArea=aceEditor.getSession().getValue();
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
  aceEditor2.getSession().setValue(txtarea, 1); //set value in ace editor
  aceEditor2.moveCursorToPosition(cursorPosition);
  document.getElementById("output2").innerHTML = compileArea;
}



//------------Active User List-----------
const activeList = new ActiveUsers();
//function to retreive list of active users
function updateActiveUsers(data)
{
  var listUsers=data.val().list;
  activeList.updateUserList(listUsers);
  var stringlist="";
  var array = listUsers.split(',')
  for (let i=0;i<array.length;i++){
    stringlist +="  - "+array[i] + " \r";
  }
  document.getElementById("userList").value = stringlist;
}


//-------------------chat box---------------------
//function getter from chat box and setter into firebase
window.textPost =function textPost() 
{ 
  var chatInput = document.getElementById("chatArea").value;
  chatInput+=document.getElementById("chatInput").value+"&#10;";
  var jsedit = 
  {
    chatArea : chatInput
  };
  update(dataRefChat, jsedit);
  document.getElementById("chatInput").value = "";
}

//function to update chat box
function updateChat(data)
{
  var chatInput = data.val().chatArea;
  document.getElementById("chatArea").innerHTML = chatInput;
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
  var listUsersActive = activeList.getUserList();
  var arr = listUsersActive.split(',')
  var currentStudent = document.getElementById("EditorHeaderStudent").innerHTML;
  for (let i=arr.length-1;i>=0;i--){
    if (arr[i]== currentStudent && arr[i-1]!=null){
      nextUser = 'users/'+arr[i-1]+'/';
      currentStudent = arr[i-1];
      dataRef2  = ref(database, nextUser);
      break;
    }else if (arr[i]==arr[0]){
      nextUser = 'users/'+arr[arr.length-1]+'/';
      currentStudent = arr[arr.length-1];
      dataRef2  = ref(database, nextUser);
    }
  }
  document.getElementById("EditorHeaderStudent").innerHTML=currentStudent;
  onValue(dataRef2, updateEditor2);
}

//change user Down
window.toggleDown =function toggleDown() 
{ 
  var nextUser;
  var listUsersActive = activeList.getUserList();
  var arr = listUsersActive.split(',')
  var currentStudent = document.getElementById("EditorHeaderStudent").innerHTML;
  for (let i=0;i<arr.length;i++){
    if (arr[i]== currentStudent && arr[i+1]!=null){
      nextUser = 'users/'+arr[i+1]+'/';
      currentStudent = arr[i+1];
      dataRef2  = ref(database, nextUser);
      break;
    }else if (arr[i]==arr[arr.length-1]){
      nextUser = 'users/'+arr[0]+'/';
      currentStudent = arr[0];
      dataRef2  = ref(database, nextUser);
    }
  }
  document.getElementById("EditorHeaderStudent").innerHTML=currentStudent;
  onValue(dataRef2, updateEditor2);
}



//----Main-----
changeLanguage();
onValue(dataRef, updateEditor); //update 1st editor screen from firebase
onValue(dataRef2, updateEditor2);
onValue(dataRefChat, updateChat);
onValue(dataRefActive, updateActiveUsers);
JsCodeArea.addEventListener('keyup', listenSetFirebase); //set firebase from key event



// Run button to compile code       
window.executeCode = function executeCode(){  
  var randomNumber = Math.floor(Math.random() * 100);
  var CodeArea=aceEditor.getSession().getValue();
  //console.log("Output =" +CodeArea);
  //console.log("languageCode =" +languageCode);
  //console.log("randomNumber =" +randomNumber);
    var triggerData = 
    {
      codeLanguage : languageCode,
      codeTrigger : languageCode+CodeArea+randomNumber,
      codeCompiler: "compiling........"
    };
    update(dataRef, triggerData);
}
