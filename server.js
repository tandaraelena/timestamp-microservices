// server.js
// where your node app starts

// init project
const app = require("./app")
var express = require('express');
var favicon = require('serve-favicon')
var path = require('path')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// https://microservices-proj.herokuapp.com/favicon.ico
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});