const axios = require('axios')
const {YOUR_API_KEY} =process.env
const {Dog} = require('../db.js')


const linkApi = `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`



const getDogs = async ()=>{
    
    const response = await axios.get(linkApi);
    const rawDataApi = response.data;

    const dogsApi = rawDataApi.map((obj) => obj);

    const resultDb = await Dog.findAll();

    const dogsDb = resultDb.map((obj) => obj.dataValues);

    const allDogs = dogsDb.concat(dogsApi);

    return allDogs
    
}    

module.exports={getDogs}



       
    // const getDogsApi = async ()=>{
    //     
    
    
  
    
// }


// const getDogsDb = async ()=>{
 




// }



// const createDog = async (image, name, height, weight, life_span)=>{
// await Dog.create({image, name, height, weight, life_span})
// 


    
    