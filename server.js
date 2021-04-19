var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')
const router = express.Router();
const cors = require('cors');

app.use(cors());

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
let jsonData = {"menu": {
        "id": "1",
        "species": "Quokka",
        "GeoJSON": {
            "polygon": [
                {"long": "-31.82066202602414", "lat": "115.76475456437339"},
                {"long": "-34.784389644249266", "lat": "116.10364812331744"},
                {"long": "-33.715487257392525", "lat": "115.05364100657803"}

            ]
        }
    }}
app.get('/', (req, res) => {
    res.send(jsonData)
})




const port = process.env.PORT || 3000
app.listen(port, function() {
    //initialize();
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});



