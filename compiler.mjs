//Jdoodle.com API free 200 credit daily
//https://docs.jdoodle.com/compiler-api/compiler-api#where-can-i-find-help-and-support

//import request from "./request";  //was blocked because of a disallowed MIME type (“text/html”).
//import request from "request";  //Uncaught TypeError: Error resolving module specifier “request”. Relative module specifiers must start with “./”, “../” or “/”.

import {request} from "/node_modules/request/index.js";
//import * as request from "./node_modules/request/index.js";

export class CompilerFeature{

    constructor(sourceCode, language){
        // define parameters
        this.resultOutput = undefined;
        this.submissionData = {
            script : sourceCode,
            language: language,
            versionIndex: "0",
            clientId: 'cab108faec1e851b720d54d302a6a9d6',
            clientSecret:'562fcedf8ff4ce99b4a81fceeda23aa8acf8176f1a083958ded6d7bf84bff5ea'
        };
    }

    //Setter for compiler output
    set compOutput(output){
        this.resultOutput=output;
    }

    //Getter for compiler output
    get compOutput(){
        return this.resultOutput;
    }


    // method to submit/compile code 
    submitCode(callback){    
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                //console.log('sourceCode: '+this.sourceCode);
                //console.log('language: '+this.language+'\n');        
                
                //request function POST
                request({
                    url: 'https://api.jdoodle.com/v1/execute',
                    method: 'POST',
                    json: this.submissionData
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
}

