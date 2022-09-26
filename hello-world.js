const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const app = express();
app.get('/yes', (req, res) => { res.sendFile('/home/front-end/frontend/dist/frontend/index.html'); });
const server = http.createServer(app);

const hostname = '69.48.142.114';
const port = 80;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
