const express = require( 'express' );
const http = require('http');
const app = express()
app.get('/', (req,res)=>
{
    res.sendFile('/home/front-end/frontend/dist/frontend/index.html');
});

app.listen(3000,() => console.log('listening on port 3000'));