const getAllDogs = (req, res)=>{


    if(req.query.name){
        res.status(200).send(`NIY todas las razas q coinciden con${req.query.name}` )    
    }
    res.status(200).send("NIY arr de obj de todos los breeds")

}

const getRazaId = (req, res)=>{

    res.status(200).send(`NIY obj detalle de la raza ${req.params.idRaza}`)

}

const postDog = (req, res)=>{
    res.status(200).send(`NIY crea nuevo perro en db usando ${req.body.name} y el resto`)
}

module.exports = {
    getAllDogs,
    getRazaId,
    postDog
}