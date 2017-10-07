const prompt = require('prompt');
const fs = require('fs');
const express = require('express');
const app = express();
const request = require('request');

//port 80?
//Writing to the files (3 places) and error with command input (1 place) shouldn't count as server error? 

prompt.start();

prompt.get(['URL', 'sample_file'], function (err, result) {
  if (err) { return onErr(err); }

  fs.writeFile(result.sample_file, "URL=" + result.URL + "\n", (err) => {
    //ERROR WITH APPENDING TO FILE
    if(err){
      console.log("Error in trying to output to samplefile");
      throw err; 
    }
    console.log("SUCCESS");
  });

  setInterval(function() {
    var seconds = Math.round(new Date().getTime() / 1000);
    request(result.URL, function (error, response, body) {
      //ERROR WITH SERVER 
      if(error){
        fs.appendFile(result.sample_file, seconds + ", -1"+ "\n", (err) =>{
        if(err){
          //ERROR WITH APPENDING TO FILE
          console.log("Error in trying to output to samplefile");
          throw err; 
        }
      });
      }
      else{
        //REPORT 200 NO MATTER WHAT
        if(response.statusCode >= 300){
          response.statusCode = 200;
        }
        fs.appendFile(result.sample_file, seconds + ", " + response.statusCode + "\n", (err) =>{
        //ERROR WITH APPENDING TO FILE
          if(err){
            console.log("Error in trying to output to samplefile");
            throw err; 
          }
        }); 
      }
    });
  }, 30000);
});

//ERROR WITH COMMAND LINE INPUT
function onErr(err) {
    if (err){
      console.log("You didn't specify two arguments correctly");
      throw err;
    } 
}
