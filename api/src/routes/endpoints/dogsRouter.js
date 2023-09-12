const {Router} = require ('express')
const {getAllDogs, getRazaId, postDog} = require('../../handlers/dogsHandler')

const dogsRouter= Router()


dogsRouter.get("/", getAllDogs)

dogsRouter.get("/:idRaza", getRazaId)

dogsRouter.post("/createDog", postDog )



module.exports = dogsRouter