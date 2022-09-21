const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const app = express();
const hostname = '69.48.142.114';
const port = 80;
app.get('/', (req, res) => { res.sendFile('/home/front-end/electron-chat/dist'); });
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
