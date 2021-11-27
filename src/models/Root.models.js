const mongoose = require('mongoose');
const {Schema} = mongoose;

const RootSchema = new Schema({

    nombre: String,
    correo: String,
    contrasena: String

});

module.exports = mongoose.model('Root', RootSchema)