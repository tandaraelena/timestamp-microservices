var express = require('express');
var app = express();

// accepted date format
const stringDateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

// accepted unix format
const unixFormat = /^\d{13}$/;

// first API endpoint... 
app.get("/api/timestamp/", function (req, res) {
  res.status(200).json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  })
});

// second api endpoint
app.get("/api/timestamp/:date", (req, res) => {
  const insertedDate = req.params.date;

  if(insertedDate.match(stringDateFormat)){
    res.status(200).json({
      "unix": new Date(insertedDate).getTime(),
      "utc": new Date(insertedDate).toUTCString(),
    })
  } else if(insertedDate.match(unixFormat)){
    res.status(200).json({
      "unix": +insertedDate,
      "utc": new Date(+insertedDate).toUTCString(),
    })
  } else {
    res.status(500).json({
      "error": "Invalid Date"
    })
  }
})

module.exports = app;