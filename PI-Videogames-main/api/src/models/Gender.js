const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de configurar correctamente tu conexión a la base de datos

const Videogame = sequelize.define('Videogame', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  plataformas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING, // Puedes ajustar el tipo de datos según tus necesidades (URL de la imagen, por ejemplo)
    allowNull: false,
  },
  fechaLanzamiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Videogame;