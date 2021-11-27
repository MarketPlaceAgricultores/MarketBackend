const RootCtrl = {}

const Root = require ('../models/Root.models')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const { Schema } = require('mongoose')


RootCtrl.crearRoot = async(req, res)=>{

    const {nombre, correo, contrasena} = req.body;

    const NuevoRoot = new Root({

        nombre,
        correo,
        contrasena
    })

    const correoRoot = await Root.findOne({correo: correo});

    if(correoRoot){
        res.json({
            mensaje: 'El correo ya existe'
        })

    }else{

        NuevoRoot.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({_id: NuevoRoot._id}, 'Secreta')
        await NuevoRoot.save() 
        res.json({

            mensaje: 'Bienvenido',
            id: NuevoRoot._id,
            nombre: NuevoRoot.nombre,
            token

        })

    }
    


}


RootCtrl.Login = async (req, res)=>{

    const {correo, contrasena} = req.body;
    const root = await Root.findOne({correo: correo})
    
    if(!root){

        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, root.contrasena)

    if(match){

        const token = jwt.sign({_id:root.id}, 'Secreta')
        res.json({

            mensaje: 'Bienvenido',
            id: root._id,
            nombre: root.nombre,
            token

        })

    }
    else{

        res.json({

            mensaje: 'Contraseña incorrecta'
        })
    }

}


module.exports = RootCtrl