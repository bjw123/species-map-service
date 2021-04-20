const SpeciesModel = require("./models/Post");
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Welcome")
})



router.get('/quokka',async (req, res) => {
    let data = await SpeciesModel.findOne({ name: 'Quokka' });

    console.log("data requested", data)
    res.send(data)
})

router.get('/wgk',async (req, res) => {
    let data = await SpeciesModel.findOne({ name: 'Western Gray Kangaroo' });
    console.log("Data requested", JSON.parse(data))
    res.send(data)
})

module.exports = router