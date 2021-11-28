const {Router} = require ('express')
const { CiudadDeUnVendedor } = require('../controllers/User.controllers')
// const { eliminarEmpleado } = require('../controllers/Empleado.controllers')
const router = Router ()

const UserCtrl = require ('../controllers/User.controllers')

router.post('/crear', UserCtrl.crear)
router.post('/login', UserCtrl.Login)
router.get('/listarUser', UserCtrl.Listar)
router.get('/listar/:id', UserCtrl.ListarId)
router.get('/listarCiudad/:ciudad', UserCtrl.CiudadDeUnVendedor)

module.exports = router