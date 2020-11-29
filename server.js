//This file acts as the entry point of carnelian hub server application


//Requiring all the packages necessary and making server.JS as entry point of application
const express = require('express');                //express package to render HTML pages using JS 
const morgan = require('morgan');                  //Morgan is used for logging request details
const bodyParser = require('body-parser');         //body-parser to parse the JSON Data 
const mongoose = require('mongoose');              //Mongoose package to connect to back-end mongoDB
const cors = require('cors');                      //Package to connect middle-ware or cross-platform applications


const app = express();                              //wrapping the new express application in app variable 
const port = process.env.PORT || 8080;
// Only include useMongoClient only if your mongoose version is < 5.0.0
require("./db");  //database connection


//express application using required packages 

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(morgan('dev'));
app.use(cors());

const tillRoutes = require('./routes/till');





//express application using Routes from this application

app.use('/api', tillRoutes);






//Setting up the port for server to run on 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
