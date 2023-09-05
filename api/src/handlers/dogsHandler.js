const { getDogs, createDog } = require("../controllers/dogsController")



const getAllDogs = async (req, res)=>{
    
    try {
        if (req.query.name) {
          let dogsRevisados = [];
          const { name } = req.query;
    
          let dogsSinRevisar = await getDogs();
    
          dogsSinRevisar.forEach((dog) => {
            if (dog.name.toLowerCase().includes(name.toLowerCase())) {
              dogsRevisados.push(dog);
            }
          });
    
          if (dogsRevisados.length !== 0) {
            console.log(dogsRevisados);
            return res.status(200).json(dogsRevisados);
          } else {
            throw new Error(`No se encuentra la raza ${name}`);
          }
        }
    
        res.status(200).json(await getDogs());
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

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