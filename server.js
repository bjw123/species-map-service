var express = require("express");
var app = express();
var cfenv = require("cfenv");
const mongoose = require("mongoose")
var bodyParser = require('body-parser')
const request = require('request');
//const helmet = require("helmet")
//app.use(helmet())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routes = require("./routes")
app.use(routes)

//*use cfenv to access uri in future for security purposes
mongoose.connect('mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net/geodata', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', function() {
  // we're connected!
  console.log("database connected")

});



// load local VCAP configuration  and service credentials
var vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) { }

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);




var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

