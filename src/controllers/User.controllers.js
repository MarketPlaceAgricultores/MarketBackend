
const UserCtrl = {}
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
//const { Schema } = require('mongoose')
const User= require ('../models/User.models')

UserCtrl.crear = async (req, res )=>{

    const {nombres, apellidos, correo, direccion, ciudad, telefono} = req.body;

    const NuevoUser = new User({
        nombres, apellidos, correo, direccion, ciudad, telefono
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


module.exports = UserCtrl