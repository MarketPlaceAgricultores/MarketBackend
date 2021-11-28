const {Router} = require('express')
const router = Router()
const ProductCtrl = require ('../controllers/Product.controllers')


router.post('/crear', ProductCtrl.crear)
router.get('/listar', ProductCtrl.Listar)
router.get('/listarProducto/:nombre', ProductCtrl.NombreProducto)

module.exports = router 
