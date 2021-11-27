const {Router} = require ('express')
// const { eliminarEmpleado } = require('../controllers/Empleado.controllers')
const router = Router ()

const UserCtrl = require ('../controllers/User.controllers')

router.post('/crear', UserCtrl.crear)
router.post('/login', UserCtrl.Login)

module.exports = router