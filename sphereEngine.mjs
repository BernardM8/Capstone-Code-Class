//import request from "request";
//import * as fs from 'fs';
//----POSTsubmission Section------
//var request = require('request');

//---------only for TEST-----------
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

export function submitCode(sourceCode, languageCode){
    console.log('Test call!');
    console.log('sourceCode: '+sourceCode);
    console.log('language: '+languageCode);
    
    /*
    
    // define access parameters
    var accessToken = '793be204cc61db86da5cdc7512b8b4c4';
    var endpoint = '2e3cdb0c.compilers.sphere-engine.com';
    var subID;

    // define request parameters
    var submissionData = {
        compilerId: 116,
        source: "print('Testing Sphere-Engine')"
    };


    // send request function
    request({
        url: 'https://' + endpoint + '/api/v4/submissions?access_token=' + accessToken,
        method: 'POST',
        form: submissionData
    }, function (error, response, body) {
        
        if (error) {
            console.log('Connection problem');
        }
        
        // process response
        if (response) {
            if (response.statusCode === 201) {
                subID = JSON.parse(response.body); // submission data in JSON
                console.log("POST: "+response.body);
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

    //await delay(2000); //wait 2 seconds
    setTimeout(() => {   

        // define request parameters
        console.log("subID:"+subID.id);
        var submissionId = subID.id;
        var stream = 'output'
        //var submissionsId = 2017;

        // send request
        request({
            //url: 'https://' + endpoint + '/api/v4/submissions/' + submissionId + '?access_token=' + accessToken,
            url: 'https://' + endpoint + '/api/v4/submissions/' + submissionId + '/' + stream + '?access_token=' + accessToken,
            method: 'GET'
        }, function (error, response, body) {
            
            if (error) {
                console.log('Connection problem');
            }
            
            // process response
            if (response) {
                console.log('response.statusCode = '+response.statusCode);
                if (response.statusCode === 200) {
                    var responseOutput=response.body;
                    //fs.writeFile("output.json",response.body );
                    console.log("GET: "+responseOutput); // list of submissions in JSON
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
            }
        });

    }, 2000);
    */
}
