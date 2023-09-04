const {Router} = require ('express')
const {getAllDogs, getRazaId, postDog} = require('../../controllers/dogsController')

const dogsRouter= Router()


dogsRouter.get("/", getAllDogs)

dogsRouter.get("/:idRaza", getRazaId)

dogsRouter.post("/", postDog )



module.exports = dogsRouter