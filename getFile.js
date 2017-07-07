var request = require('request');
var fs = require('fs');

//Check to see if file already exists
fs.exists('./model/book.txt', function(exists) {
  if(exists) {
    //Remove file to avoid duplicates
    console.log(('File exists. Deleting now ...'));
    fs.unlink('./model/book.txt');
  } else {
    //Do nothing
    console.log(('File not found, so not deleting.'));
  }
});

//Retrieve file from URL
request.get('http://www.gutenberg.org/files/974/974-0.txt', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var csv = body;
    fs.writeFile('./model/book.txt', response.body);
  }
});