const {Router} = require ('express')

const {getTemperaments} = require('../../handlers/temperamentsHandler')

const temperamentsRouter= Router()


temperamentsRouter.get("/", getTemperaments )

module.exports = temperamentsRouter