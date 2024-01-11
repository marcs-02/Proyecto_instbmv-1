const mongoose = require('mongoose');

//CONEXION A MONGODB
mongoose.connect('mongodb://localhost:27017/INSTBVM')
  .then(() => console.log('¡Mongodb - Conectado!'))
  .catch(err => console.error("Mongodb - Error al conectarse: ",err));

//EXPORTANDO MODULO MONGOOSE
module.exports = mongoose;