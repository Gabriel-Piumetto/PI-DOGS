const { Router } = require('express');
const dogsRouter = require('./endpoints/dogsRouter')
const temperamentsRouter = require('./endpoints/temperamentsRouter')
const {YOUR_API_KEY} =process.env
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


const linkApi = `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)

//end points






module.exports = router;
