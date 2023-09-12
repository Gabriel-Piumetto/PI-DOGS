const axios = require('axios')
const {YOUR_API_KEY} =process.env
const {Dog, Temperament} = require('../db.js')
const { v4: uuidv4, validate } = require('uuid');


const linkApi = `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`



const getDogs = async ()=>{
    
    const response = await axios.get(linkApi);
    const rawDataApi = response.data;

    const dogsApi = rawDataApi.map((obj) => obj);

    const dogsDb = (await Dog.findAll()).map((obj) => obj.dataValues);


    const allDogs = dogsDb.concat(dogsApi);

    return allDogs
    
}

 const getDogbyId = async (id)=>{

    
    
    if (validate(id)) {
       
        
     const matchDogDb = await Dog.findByPk(id,{include:{model:Temperament, attributes:["name"]}})
      
      return matchDogDb
    }
    
    
    
    
    const response = await axios.get(linkApi);
    const rawDataApi = response.data;

    


    const foundDogApi = rawDataApi.find( (dog) => dog.id === Number(id))

    
    return foundDogApi
     
    
}

     
const createDog = async (image, name, height, weight, life_span, temperament)=>{

const selectTemperament = await Temperament.findAll({where: {name:temperament}}) 
 


 if(selectTemperament.length>0){
  
    const newDog = await  Dog.create({
        name:name,
        height:height,
        weight:weight,
        life_span: life_span,
        image:image,
     })

     await newDog.addTemperaments(selectTemperament)
 


}else throw new Error('El temperamento elegido no existe en la base de datos')

    
}


module.exports={getDogs, getDogbyId, createDog}

    
    