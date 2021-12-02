const {Router} = require('express')
const router = Router()
const ProductCtrl = require ('../controllers/Product.controllers')


router.post('/crear', ProductCtrl.crear)
router.get('/listar', ProductCtrl.Listar)
router.get('/listarProducto/:nombre', ProductCtrl.NombreProducto)
router.put('/editarProducto/:id', ProductCtrl.editarProducto)
router.delete('/eliminarProducto/:id', ProductCtrl.eliminarProducto)


module.exports = router 
