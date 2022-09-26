const express = require( 'express' );
const http = require('http');
const app = express()
var distDir = __dirname + "/front/";
app.use('/', express.static('/home/back-end/front/index.html'));
// app.get('/', (req,res)=>
// {
//     res.sendFile('/home/front-end/frontend/dist/frontend/index.html');
// });

const hostname = '69.48.142.114';
const port = 80;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
