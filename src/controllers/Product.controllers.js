const ProductCtrl = {}
//const {Schema, Mongoose} =  require ('mongoose')
const Product = require ('../models/Product.models')

ProductCtrl.crear = async (req,res)=>{

    const {nombre, descripcion, unidadMedida, precioXunidad} = req.body;

    const NuevoProduct = new Product({

        nombre,
        descripcion,
        unidadMedida,
        precioXunidad

    })

    const respuesta = await NuevoProduct.save() 

    res.json({

        mensaje: 'Producto creado', 
        respuesta
    
    })
}

ProductCtrl.Listar = async (req, res)=>{

    const respuesta = await Product.find()
    res.json(respuesta)
}

ProductCtrl.NombreProducto = async (req, res)=>{

    const nombre = req.params.nombre;
    const respuesta = await Product.find({_nombre: nombre});
    res.json (respuesta)
}


module.exports = ProductCtrl