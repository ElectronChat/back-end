const hostname = '69.48.142.114';
const port = 80;
/*
Put content of angular2 build into 'public' folder.
*/
const html = __dirname + '/front';
// Express
const bodyParser = require('body-parser');
const express = require('express');
var app = express();
app
    .use(bodyParser.json())
    // Static content
    .use(express.static(html))
    // Default route
    .use(function(req, res) {
      res.sendFile(html + 'index.html');
    })
    // Start server
    .listen(port, hostname, function () {
        console.log('Port: ' + port);
        console.log('Html: ' + html);
    });
