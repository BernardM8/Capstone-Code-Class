//Jdoodle.com API free 200 credit daily
//https://docs.jdoodle.com/compiler-api/compiler-api#where-can-i-find-help-and-support
'use strict';

const functions = require('firebase-functions');
const request = require('request-promise');
const admin = require('firebase-admin');
const { ref } = require('firebase-functions/v1/database');

admin.initializeApp(functions.config().firebase);
// root is a Reference to the root of your database.
const root = admin.database().ref('User1');



function getSubData(callback){
    return new Promise((resolve, reject) =>{
    root.once("value")
        .then(function(snapshot){
            var sourceCode = snapshot.child("codeEditor").val();
            var language = snapshot.child("codeLanguage").val();
            //console.log("snapshot = "+snapshot.val());
            //console.log('source Code in m: '+sourceCode);
            //console.log('language in m: '+language);
            var submissionData = {
                script : sourceCode,
                language: language,
                versionIndex: "0",
                clientId: 'cab108faec1e851b720d54d302a6a9d6',
                clientSecret:'562fcedf8ff4ce99b4a81fceeda23aa8acf8176f1a083958ded6d7bf84bff5ea'
            };
            resolve(submissionData);
        })
    });
}




exports.webhook = functions.database.ref('/User1/codeTrigger').onUpdate(async (snap) => {
    
    var submissionData;   
    var initializePromise = getSubData();
    initializePromise.then(function(result){
        submissionData = result;
        //console.log('submissionData.language: '+submissionData.language);

        //call a request function here
        request({
            uri: 'https://api.jdoodle.com/v1/execute',
            method: 'POST',
            json: submissionData,
            //resolveWithFullResponse: true,
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
                    console.log('Compiled Output:', response.body.output);
                    root.child("codeCompiler").set(response.body.output);             
        
                } else {
                    console.log('error: ', error);
                    reject();
                }
            }
        });
    });    
});

   