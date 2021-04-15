var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')
const router = express.Router();

//Mongoose
const mongooseConnect = require("./mongoose")
//Security features

const helmet = require("helmet")
app.use(helmet())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//serve static file (index.html, images, css)
//app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.send("Welcome")
})




var port = process.env.PORT || 3000
app.listen(port, function() {
    //initialize();
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});



