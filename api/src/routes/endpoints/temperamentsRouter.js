const {Router} = require ('express')
const temperamentRouter= Router()
const {getTemperaments} = require('../../controllers/temperamentController')

temperamentRouter.get("/", getTemperaments )

module.exports = temperamentRouter