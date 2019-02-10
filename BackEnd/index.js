var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var request = require('request');
var axios = require('axios');
var R = require("r-script");
const rscript = require('js-call-r');
const SendOtp = require('sendotp');
var nodemailer = require('nodemailer');

// // Sync
// rscript.callSync(RScript, [Args], [Options]);
 
// // Async, support Promise while callback is undefined
// rscript.call(RScript, [Args], [Options]);
// rscript.call(Rscript, [Args], [Options], [callback]);

var out = R('C:/Users/akil/Desktop/sample.R').data(10).callSync();
console.log(out);

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
  app.get('/', function(req,res) {
    res.send('Hello World');
});

// var username = "ajithbalajiun@gmail.com";
// var password = "password";

var username = "ajithbalajiun@gmail.com";
var password = "password";


  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akhilkrishnamoorthy@gmail.com',
    pass: '9790863485'
  }
});

var mailOptions = {
  from: 'akhilkrishnamoorthy@gmail.com',
  to: 'ajithbalajiun@gmail.com',
  subject: 'Wrong Password!',
  text: 'This is to notify you made an attempt to login with an invalid password. Kindly reply to this email whether it was you!'
};
app.post('/login',function(req,res){
    
  console.log("Inside Login Post Request",req.body);
  if(req.body.username=="ajithbalajiun@gmail.com" && req.body.password!=password) {
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
res.writeHead(400,{
  'Content-Type' : 'text/plain'
})
res.end("Invalid Credentials");

  }
  else {
    console.log("success");
     res.writeHead(200,{
         'Content-Type' : 'text/plain'
     })
     res.end("Successful Login");
  }
 
  
});
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'akhilkrishnamoorthy@gmail.com',
//     pass: '9790863485'
//   }
// });

// var mailOptions = {
//   from: 'akhilkrishnamoorthy@gmail.com',
//   to: 'ajithbalajiun@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: '!!!!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
app.listen(3001);
console.log("Server Listening on port 3001");