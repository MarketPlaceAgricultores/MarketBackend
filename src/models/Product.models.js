const mongoose = require ('mongoose')
const {Schema} = mongoose

const ProductSchema = new Schema({

    nombre: String,
    descripcion: String,
    unidadMedida: String,
    precioXunidad: Number


})

module.exports = mongoose.model('Product', ProductSchema)