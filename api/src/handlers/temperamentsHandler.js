const { addDB,respDB, temperamentosFinal } = require('../controllers/temperamentsController');

getTemperaments = async (req, res) => {
  try {
    await addDB();

    
    await respDB();

    res.status(200).json(temperamentosFinal);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

module.exports = {
  getTemperaments
};
