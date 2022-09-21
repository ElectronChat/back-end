const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const app = express();
const hostname = '69.48.142.114';
const port = 80;
app.use(bodyParser.urlencoded({extended: false}));
app.use('/home',route);
app.use((req, res,next)=>{
   res.sendFile('../front-end/electron-chat/dist/electron-chat/index.html');
});
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
