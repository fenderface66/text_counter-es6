var request = require('request');
var fs = require('fs');

fs.exists('./model/book.txt', function(exists) {
  if(exists) {
    //Show in green
    console.log(('File exists. Deleting now ...'));
    fs.unlink('./model/book.txt');
  } else {
    //Show in red
    console.log(('File not found, so not deleting.'));
  }
});

request.get('http://www.gutenberg.org/files/974/974-0.txt', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var csv = body;
    fs.writeFile('./model/book.txt', response.body);
  }
});