
const UserCtrl = {}
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const { Schema } = require('mongoose')
const User= require ('../models/User.models')

UserCtrl.crear = async (req, res )=>{

    const {nombres, apellidos, correo, direccion, ciudad, telefono, contrasena} = req.body;

    const NuevoUser = new User({
        nombres, apellidos, correo, direccion, ciudad, telefono, contrasena
    })


    const respuesta = await NuevoUser.save()

    res.json({

        mensaje: 'Usuario creado', 
        respuesta
    
    })


}

UserCtrl.Login = async (req, res)=>{

    const {correo, contrasena} = req.body;
    const user = await User.findOne({correo: correo})
    
    if(!user){

        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }
    

    const match = await bcrypt.compare(contrasena, user.contrasena)

    //console.log(contrasena)
    //console.log(user.contrasena)

    if(match){

        const token = jwt.sign({_id:user.id}, 'Secreta')
        res.json({

            mensaje: 'Bienvenido',
            id: user._id,
            nombre: user.nombre,
            token

        })

    }
    else{

        res.json({

            mensaje: 'Contraseña incorrecta'
        })
    }


}


UserCtrl.Listar = async (req, res)=>{

    const respuesta = await User.find()
    res.json(respuesta)

}

UserCtrl.ListarId = async (req, res)=>{

    const id = req.params.id;
    const respuesta = await User.findOne({_id:id})
    res.json(respuesta)

}

UserCtrl.CiudadDeUnVendedor = async (req, res)=>{

    const ciudad = req.params.ciudad;
    const respuesta = await User.find({ciudad: ciudad});
    res.json (respuesta)

}


module.exports = UserCtrl