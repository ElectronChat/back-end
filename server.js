const http = require('http');
const express = require("express");
const hostname = 'localhost';
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');

const io = socketio(server);

const PORT = 3000 || process.env.PORT;


server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
