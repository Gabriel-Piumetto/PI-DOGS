const { createDog } = require("../controllers/dogsController")


const getAllDogs = (req, res)=>{


    if(req.query.name){
        res.status(200).send(`NIY todas las razas q coinciden con${req.query.name}` )    
    }
    res.status(200).send("NIY arr de obj de todos los breeds")

}

const getRazaId = (req, res)=>{

    res.status(200).send(`NIY obj detalle de la raza ${req.params.idRaza}`)

}

const postDog = async (req, res)=>{

    
    try {
        
        const {image, name, height, weight, life_span} = req.body
        const newDog = await createDog(image, name, height, weight, life_span)

        res.status(201).json(newDog)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
    

}

module.exports = {
    getAllDogs,
    getRazaId,
    postDog
}