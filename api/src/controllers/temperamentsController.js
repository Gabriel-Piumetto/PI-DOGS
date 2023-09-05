const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const linkApi = `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`;
const { Temperament } = require('../db.js');


const temperamentosFinal = [] 

const addDB = async () => {
  
    const response = await axios.get(linkApi);
    const rawDataApi = response.data

    const tempSinSplit = rawDataApi.map( obj => obj.temperament)
    const tempDividosRepetidos = tempSinSplit.toString().split(',')
 
    const tempUnicos = []
    
    tempDividosRepetidos.forEach(
        temp =>{
            if(!tempUnicos.includes(temp.trim())){
                tempUnicos.push(temp.trim())
            }
        }
    )
    

    tempUnicos.forEach(
        temp => {
            Temperament.findOrCreate({
                where: {name: temp}
            })
        }
    )
    
   
}

const respDB = async () =>{
 

const resultDb = await Temperament.findAll()

resultDb.forEach( obj =>{
    temperamentosFinal.push(obj.dataValues.name)
})

return temperamentosFinal
}



    
    
   

module.exports = { addDB, respDB, temperamentosFinal };
