//import {CompilerFeature} from "src/compiler.mjs";
import {request} from "request"; 


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

// method to submit/compile code 
function submitCode(callback,sourceCode,language){    
  return new Promise((resolve, reject) =>{
      setTimeout(()=>{
          //console.log('sourceCode: '+this.sourceCode);
          //console.log('language: '+this.language+'\n');        
          
          //request function POST
          request({
              url: 'https://api.jdoodle.com/v1/execute',
              method: 'POST',
              json: {
                script : sourceCode,
                language: language,
                versionIndex: "0",
                clientId: 'cab108faec1e851b720d54d302a6a9d6',
                clientSecret:'562fcedf8ff4ce99b4a81fceeda23aa8acf8176f1a083958ded6d7bf84bff5ea'
              }
          }, 

          function (error, response, body) {          
              if (error) {
                  console.log('Connection problem');
              }           
              // process response
              if (response) {
                  console.log('error: ', error);
                  console.log('statusCode:', response && response.statusCode);
                  console.log('body: ', body);
                  console.log('\n');

                  if (response.statusCode === 200) {
                      //var responseBody = JSON.parse(response.body); // output data in JSON
                      console.log('Compiled Output:', response.body.output);
                      resolve(response.body.output);              
                  
                  } else {
                      console.log('error: ', error);
                      reject();
                      /*
                      if (response.statusCode === 401) {
                          console.log('Invalid access token');
                      } else if (response.statusCode === 402) {
                          console.log('Unable to create submission');
                      } else if (response.statusCode === 400) {
                          var body = JSON.parse(response.body);
                          console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
                      }*/
                  }
              }
          });
      }, 2000);
  });     
}

// Run button to compile code       
window.executeCode = function executeCode(){  
  var sourceCode = print('testing jdoodle API');              //source code to test compiler service
  var languageCode = 'python3';  
  console.log("sourceCode = testing jdoodle API");
  var compiledOutput;
  var initializePromise=compiler.submitCode(sourceCode,languageCode);
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

