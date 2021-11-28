const mongoose = require ('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema ({

    nombres: String,
    apellidos: String,
    correo: String,
    contrasena: String,
    direccion: String,
    ciudad: String,
    telefono: Number

});

module.exports = mongoose.model ('User', UserSchema)