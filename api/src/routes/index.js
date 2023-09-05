const { Router } = require('express');
const dogsRouter = require('./endpoints/dogsRouter')
const temperamentsRouter = require('./endpoints/temperamentsRouter')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)








module.exports = router;
