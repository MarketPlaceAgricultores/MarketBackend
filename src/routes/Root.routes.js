const {Routes, Router} = require('express')
const router = Router()
const RootCtrl = require ('../controllers/Root.controllers')
const { crearRoot } = require('../controllers/Root.controllers')


router.post('/crear', RootCtrl.crear)
router.post('/login', RootCtrl.Login)

module.exports = router