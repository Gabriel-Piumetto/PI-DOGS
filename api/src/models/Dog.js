const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV1
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reference_image_id:{
      type:DataTypes.STRING,
      defaultValue:'https://i.imgur.com/oXRRS9s.png'
  
    },
    height:{
      type:DataTypes.STRING
    },
    weight:{
      type:DataTypes.STRING
    },
    life_span:{
      type:DataTypes.STRING
    },
    temperament:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    isCreated:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }

  },{timestamps:false});
}
