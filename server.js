var express = require("express");
var app = express();
var cfenv = require("cfenv");
//var bodyParser = require('body-parser')
const mongoose = require("mongoose")

const cors = require('cors');

app.use(cors());
//Security features

const helmet = require("helmet")
app.use(helmet())

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

//calls routes
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


const port = process.env.PORT || 3000
app.listen(port, function() {
    //initialize();
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

















