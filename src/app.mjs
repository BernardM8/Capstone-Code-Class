import {CompilerFeature} from "src/compiler.mjs";

// Create ACE editor
  const aceEditor = ace.edit("editor"); 
  aceEditor.setTheme("ace/theme/monokai");
  const session = aceEditor.getSession();

// Create ACE editor 2
const aceEditor2 = ace.edit("editor2"); 
aceEditor2.setTheme("ace/theme/monokai");
const session2 = aceEditor.getSession();
aceEditor2.session.setMode("ace/mode/c_cpp");
const JsCodeArea2 = document.getElementById("editor2");


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
  }
}


// Run button to compile code       
window.executeCode = function executeCode(){  
  var sourceCode = 'print("testing jdoodle API")';              //source code to test compiler service
  var languageCode = 'python3';  

//document.getElementById("output").innerHTML = CodeArea; // remove when implementing compiler 

  const compiler = new CompilerFeature(sourceCode, languageCode); 
  var compiledOutput;

  var initializePromise=compiler.submitCode();
  initializePromise.then(function(result){
    compiledOutput = result;
          console.log("Initialized details");
          // Use user details from here
          console.log(compiledOutput)
          document.getElementById("output").innerHTML = compiledOutput;
      }, function(err) {
          console.log(err);
      })
      

}
