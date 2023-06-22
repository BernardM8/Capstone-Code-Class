import {database} from "./App";
import {ref, onValue, update } from "firebase/database";



//function getter from ace editor and setter into firebase
export const updateEditorToFirebase = (newCode, firebasePath) => { 
  //const dataRef  = ref(database, 'User1/');
  const dataRef  = ref(database, firebasePath);
  var jsedit = 
  {
    codeEditor : newCode
  };
  update(dataRef, jsedit);
}


//function getter from ace editor and setter into firebase
export const updateCompilerToFirebase = (newCode, firebasePath) => { 
  //const dataRef  = ref(database, 'User1/');
  const dataRef  = ref(database, firebasePath);
  var jsedit = 
  {
    codeCompiler : newCode
  };
  update(dataRef, jsedit);
}

//function getter from firbase and setter into ace editor
export const updateEditor = (callback, firebasePath) =>{
  //const dataRef  = ref(database, 'User1/codeEditor/');
  const dataRef  = ref(database, firebasePath);
    onValue(dataRef, (snapshot) => {
        const codeFromFirebase = snapshot.val();
        callback(codeFromFirebase);
    })
}

//function getter from firbase and setter into ace editor
export const updateEditor2 = (callback, firebasePath) =>{
  //const dataRef  = ref(database, 'User1/codeEditor/');
  const dataRef  = ref(database, firebasePath);
    onValue(dataRef, (snapshot) => {
        const codeFromFirebase = snapshot.val();
        callback(codeFromFirebase);
    })
}