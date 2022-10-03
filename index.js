let express = require('express');
let app = express();

// we need to include any of our created routes so it will be 'linked'
const home = require( './app/routes/main');

// disabling this because sonar said it was a security threat
let app1 = express();  // Compliant
app1.disable("x-powered-by");

// middleware function 
app.get('/', function (req, res, next) {
  next();
})

// this is our directory where all of our frontend gets built to. 
var distDir = __dirname + "/front/";
app.use('/home/back-end/front');

// here is our routing pipeline, we reference each of our routing modules that we need right here.
// the first route is how we will start creating our routes.
app.use('/', home);

const port = 80;
app.listen(port, () => {
  console.log(err, app.address());
});

// test function for mocha test
module.exports = function() {
  return 'hello';
}
