const args = process.argv.slice(2);
const http = args[0];
const path = args[1]

const fs = require("fs");
const request = require('request');



request(http, (error, response, body) => {

  if(error) {
    console.log('error:', error); // Print the error if one occurred
  } else if(!error) {
    fs.writeFile(path, body, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved 3261 bytes to ${path}`);
    });
  }
});

