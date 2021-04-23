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
    console.log("Data requested", data)
    res.send(data)
})



/*
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: '{}',
  }),
  serviceUrl: '{https://api.us-south.discovery.watson.cloud.ibm.com/instances/20965335-5ee4-4058-b3c0-ef976fc70e09}',
});

const queryParams = {
  environmentId: '{system}',
  collectionId: '{news-en}',
  query: 'host::abc.net.au text:Quokka'
};

discovery.query(queryParams)
    .then(queryResponse => {
      console.log(JSON.stringify(queryResponse, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });

 */

router.get('/watson/discovery', (req, res) =>{
            res.send("sentiment analusis, implemented in next sprint")
})

module.exports = router