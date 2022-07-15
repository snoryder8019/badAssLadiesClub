var signUpInit = [1,1,1,1,1];
const express =require('express');
const dotenv = require('dotenv').config();
const fs =require('fs');
const ejs = require('ejs');
var url = require('url');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;


//routehandlers
const routePages = require('./routes/pages.js');
const routeLinks = require('./routes/links.js');
//const contactSent = require('../pages/partials/contact.ejs');
var http = require('http');
var nodemailer = require('nodemailer');
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let showTime = hours+':'+minutes;

app.use(express.urlencoded( {extended: true} ))
//middle static
app.use(express.static('public'));

app.use(routePages);
app.use(routeLinks);
//HOMEPAGE ROUTE
app.get('/',(req, res) => {
  res.render('pages/index')
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Index Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'Index route hit & data logged successfully'+req.ip);

  });
});
//frontend log checking
app.get('/loulogs',(req, res) => {
  res.render('pages/logs')
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' LouLogs Hit '+req.ip+'\r\n', function (err) {
      if(err) {throw err};
      console.log(showTime+'LouLogs route hit & data logged successfully'+req.ip);

  });
});

// routes for :blogs loop through 5 menu links

//contact form
app.get('/contact',(req, res) => {
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Contact Form Hit '+req.ip, function (err) {
      if(err) {throw err};
      console.log(showTime+' Contact route hit & data logged successfully'+req.ip);

  });
    res.render('pages/contact')
});
//CONTACT FORM POST
app.post('/sendData', (req,res) => {
  fs.appendFile('./views/partials/logs.ejs','<br>'+ showTime+' Contact ****POST ACTION*** Check clent/saved/signups.html '+req.ip, function (err) {
      if(err) {throw err};
      console.log('**New Contact Saved** \r\n'+req.body.fname + ' '+req.body.lname);
    });
  fs.appendFile('./client/saved/logs.ejs', '\r\n'+'  New Submission:\r\n'+Date()+'\r\n'+req.ip+'\r\n'+req.body.fname+'\r\n'+req.body.lname+'\r\n'+req.body.email+'\r\n', function (err) {
      if(err) {throw err};
      //    res.render('pages/contact_thankyou');

  });
});
//SET EJS TEMPLATE
  app.set('view engine','ejs');
  //SET SERVER
  console.log('DUDE!!!!****** CHECK WHAT BRANCH YOU ARE WORKING ON!!!!!!!!!');
  console.log('find app @ www.badassladiesclub.com');
app.listen(port);
