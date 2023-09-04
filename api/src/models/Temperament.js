const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV1
    }
    ,name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{timestamps:false});
};
