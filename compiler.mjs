//import request from "./request";  //was blocked because of a disallowed MIME type (“text/html”).
import request from "request";  //

export class CompilerFeature{

    constructor(sourceCode, languageCode){
        // define parameters
        this.accessToken = '793be204cc61db86da5cdc7512b8b4c4';
        this.endpoint = '2e3cdb0c.compilers.sphere-engine.com';
        this.timer = 15;
        this.sourceCode=sourceCode;
        this.languageCode=languageCode;

        this.compiledOutput;

        // define request parameters
        this.submissionData = {
            compilerId: languageCode,
            source: sourceCode
        };
    }


    //Setter for compiler output
    set compOutput(output){
        this.compiledOutput=output;
    }


    //Getter for compiler output
    get compOutput(){
        return this.compiledOutput;
    }


    // method to submit/compile code 
    submitCode(){       
        console.log('sourceCode: '+this.sourceCode);
        console.log('language: '+this.languageCode);
        var submissionId; 

        // first send request function POST
        request({
            url: 'https://' + this.endpoint + '/api/v4/submissions?access_token=' + this.accessToken,
            method: 'POST',
            form: this.submissionData
        }, function (error, response, body) {
            
            if (error) {
                console.log('Connection problem');
            }
            
            // process response
            if (response) {
                if (response.statusCode === 201) {
                    var submissionObj = JSON.parse(response.body); // submission data in JSON
                    submissionId = submissionObj.id;
                    //console.log("POST response.body: "+response.body);                   
                    console.log("POST submissionId: "+submissionId);
                } else {
                    if (response.statusCode === 401) {
                        console.log('Invalid access token');
                    } else if (response.statusCode === 402) {
                        console.log('Unable to create submission');
                    } else if (response.statusCode === 400) {
                        var body = JSON.parse(response.body);
                        console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
                    }
                }
            }
        });


        //while (this.timer>0){
            //wait 2 seconds
            setTimeout(() => {   

                // define request parameters
                console.log("GET with submissionId:"+submissionId);
                var stream = 'output'

                // second send request GET
                request({
                    //url: 'https://' + endpoint + '/api/v4/submissions/' + submissionId + '?access_token=' + accessToken,
                    url: 'https://' + this.endpoint + '/api/v4/submissions/' + submissionId + '/' + stream + '?access_token=' + this.accessToken,
                    method: 'GET'
                }, function (error, response, body) {
                    
                    if (error) {
                        console.log('Connection problem');
                    }
                    
                    // process response
                    if (response) {
                        console.log('response.statusCode = '+response.statusCode);
                        this.timer = 0;
                        console.log("timer: "+this.timer);
                        if (response.statusCode === 200) {
                            this.compiledOutput=response.body;
                            //compOutput(response.body);
                            console.log("GET result: "+this.compiledOutput);
                            //console.log(typeof this.compiledOutput);  
                            return this.compiledOutput;


                        } else {
                            if (response.statusCode === 401) {
                                console.log('Invalid access token');
                            } else if (response.statusCode === 403) {
                                console.log('Access denied');
                            } else if (response.statusCode === 404) {
                                var body = JSON.parse(response.body);
                                console.log('Non existing resource, error code: ' + body.error_code + ', details available in the message: ' + body.message)
                            } else if (response.statusCode === 400) {
                                var body = JSON.parse(response.body);
                                console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
                            }
                        }
                        
                    } else{
                        this.timer= this.timer - 2;
                        console.log("timer"+this.timer);
                    } 
                });

            }, 2000);
        //}    
    }
    
}


/*
// ____________for Testing Only__________
var sourceCode = 'print("testing sphere engine")';
var languageCode = 116;
const compiler = new CompilerFeature(sourceCode, languageCode);
var compiledOutput = compiler.submitCode();
console.log(compiledOutput);
*/

//---------only for connection TEST-----------
/*request({
    url: 'https://' + endpoint + '/api/v4/test?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log(JSON.parse(response.body)); // test message in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
        }
    }
});
*/

