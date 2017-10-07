const prompt = require('prompt');
const fs = require('fs');
const express = require('express');
const app = express();
const request = require('request');

//port 80?



  prompt.start();

  prompt.get(['URL', 'sample_file'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  URL: ' + result.URL);
    console.log('  sample_file: ' + result.sample_file);

    //LOGIC FOR PROBER
    // setTimeout(function() {
    //   const stringUrl = '/' + URL;
    //   app.get(stringUrl, function(req, res){
    //     fs.writeFile(result.sample_file, body, (err) => {
    //       if(err){
    //         console.log("Error in trying to output to samplefile");
    //         throw err; 
    //       }
    //       console.log("SUCCESS");
    //     });
    //   });
    //   modal.style.display = "none";
    // }, 30000);

  fs.writeFile(result.sample_file, "URL=" + result.URL + "\n", (err) => {
    if(err){
      console.log("Error in trying to output to samplefile");
      throw err; 
    }
    console.log("SUCCESS");
    });

  setInterval(function() {
    request('http://www.google.com', function (error, response, body) {
      if(error){
        fs.appendFile(result.sample_file, milliseconds + ", -1"+ "\n", (err) =>{
        if(err){
          console.log("Error in trying to output to samplefile");
          throw err; 
        }
      });
      }
      // var milliseconds = new Date().getTime();

      var seconds = Math.round(new Date().getTime() / 1000);
      fs.appendFile(result.sample_file, seconds + "," + response.statusCode + "\n", (err) =>{
        if(err){
          console.log("Error in trying to output to samplefile");
          throw err; 
        }
      });
    });
  }, 30000);

    // fs.writeFile(result.sample_file, 'Hello Node.js', (err) => {
    //   if (err){
    //     console.log("You didn't specify two arguments, try again")
    //     throw err;
    //   } //this shouldn't count as server error? 
    //   console.log('The file has been saved!');
    // });
  });


  function onErr(err) {
    fs.writeFile(result.sample_file, '-1', (err) => {
      if (err){
        console.log("You didn't specify two arguments correctly");
        throw err;
      } //this shouldn't count as server error? 
      console.log('Error (-1) has been logged');
    });
  }


  // app.listen(80);