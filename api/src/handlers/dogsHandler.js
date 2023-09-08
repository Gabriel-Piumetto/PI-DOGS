const { getDogs, createDog, getDogbyId } = require("../controllers/dogsController")



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

const getRazaId = async(req, res)=>{

  try {
    const id = req.params.idRaza
    const foundDog = await getDogbyId(id)
   if(foundDog!== undefined) res.status(200).json(foundDog)
   
   else throw new Error('No hay una raza de perro con esa ID')
  
  } catch (error) {
    res.status(400).json({error: error.message})
  }

  


}

const postDog = async (req, res)=>{

    
    try {
        
        const {image, name, height, weight, life_span, temperament} = req.body
        await createDog(image, name, height, weight, life_span, temperament)

        res.status(201).send('Perro creado correctamente')

    } catch (error) {
        res.status(400).json({error:error.message})
    }
    

}

module.exports = {
    getAllDogs,
    getRazaId,
    postDog
}