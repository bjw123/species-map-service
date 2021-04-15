const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net/geodata', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', function() {
    // we're connected!
    console.log("database connected")
});


let Schema = mongoose.Schema
let SpeciesSchema = new Schema({
    name: String, population: Number, geoData: String
})

const SpeciesModel = mongoose.model('species', SpeciesSchema);

//generic error handler
function handleError(err) {
    console.log(err)
}

//Adds Generic element
function AddSpecies(){
    let str = "[[-31.82066202602414, 115.76475456437339], [-34.784389644249266, 116.10364812331744],[-33.715487257392525, 115.05364100657803]]"
    const Quokka = new SpeciesModel({ name: 'Quokka', population: 15000, geoData: str })




    Quokka.save(function (err){if(err) return handleError(err)});

}

function GetAllSpecies(){
    SpeciesModel.find(function (err, species) {
        if (err) return console.error(err);
        console.log(species);
    })
}


//specified search
function SearchSpecies() {
    SpeciesModel.find({name: /^Quokka/}, function (err, species) {
        if (err) return console.log(err);
        console.log(species)
    });
}

