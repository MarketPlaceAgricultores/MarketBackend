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
    const respuesta = await Product.find({nombre: nombre});
    res.json (respuesta)
}

ProductCtrl.editarProducto = async (req, res)=>{

    const id = req.params.id   
    await Product.findByIdAndUpdate({_id: id}, req.body)


    res.json({

        mensaje: 'Producto actualizado'
    })
}

ProductCtrl.eliminarProducto = async (req, res)=>{

    const id =req.params.id;
    await Product.findByIdAndRemove({_id: id})
    res.json({
        
        mensaje: 'Producto eliminado'
    })
}


module.exports = ProductCtrl