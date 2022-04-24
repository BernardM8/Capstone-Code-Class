'use strict';

var compiler_mjs = require('src/compiler.mjs');

// Create ACE editor
  const aceEditor = ace.edit("editor"); 
  aceEditor.setTheme("ace/theme/monokai");
  aceEditor.getSession();

// Create ACE editor 2
const aceEditor2 = ace.edit("editor2"); 
aceEditor2.setTheme("ace/theme/monokai");
aceEditor.getSession();
aceEditor2.session.setMode("ace/mode/c_cpp");
document.getElementById("editor2");
//Change Language select section
window.changeLanguage = function changeLanguage(){
  let language = $("#languages").val();
  if(language == 'c++' ){
    aceEditor.session.setMode("ace/mode/c_cpp");
  } else if(language == 'java' ){
    aceEditor.session.setMode("ace/mode/java");
  } else if(language == 'python' ){
    aceEditor.session.setMode("ace/mode/python");
  } else if(language == 'node' ){
    aceEditor.session.setMode("ace/mode/javascript");
  }
};


// Run button to compile code       
window.executeCode = function executeCode(){  
  var sourceCode = 'print("testing jdoodle API")';              //source code to test compiler service
  var languageCode = 'python3';  

//document.getElementById("output").innerHTML = CodeArea; // remove when implementing compiler 

  const compiler = new compiler_mjs.CompilerFeature(sourceCode, languageCode); 
  var compiledOutput;

  var initializePromise=compiler.submitCode();
  initializePromise.then(function(result){
    compiledOutput = result;
          console.log("Initialized details");
          // Use user details from here
          console.log(compiledOutput);
          document.getElementById("output").innerHTML = compiledOutput;
      }, function(err) {
          console.log(err);
      });
      

};
