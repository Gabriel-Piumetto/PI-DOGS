const axios = require('axios')
const {YOUR_API_KEY} =process.env
const {Dog} = require('../db.js')


const linkApi = `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`


const createDog = async (image, name, height, weight, life_span)=>{
await Dog.create({image, name, height, weight, life_span})
}

    
    
module.exports={createDog}