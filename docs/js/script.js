// <script src="http://localhost:3000/Real-timeUpdate.js"></script>
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

const firebaseConfig = 
{
    apiKey: "AIzaSyDICcooHUciQZvAs_dPpExVxqBhtJMojbY",
    authDomain: "codelab-database-1.firebaseapp.com",
    projectId: "codelab-database-1",
    storageBucket: "codelab-database-1.appspot.com",
    messagingSenderId: "573387563239",
    appId: "1:573387563239:web:161f23412c218ba50ac242",
    measurementId: "G-4XTVC35JQL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef  = ref(database, 'Edits/');


const JsCodeArea = document.getElementById('code-area');

//var socket = io.connect('http://localhost:3000');
//socket.on('text', BroadCastData);
onValue(dataRef, BroadCastData);

JsCodeArea.addEventListener('input', Listener);


function BroadCastData(data)
{
    var txtarea = document.getElementById('code-area');
    txtarea.value = data.val().userEdit;
}

function Listener() 
{
    var jsedit = 
    {
        userEdit : JsCodeArea.value
    };
    //socket.emit('text', edit)
    set(dataRef, jsedit);
}