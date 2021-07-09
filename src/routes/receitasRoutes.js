const express = require('express')
const router = express.Router()
const controller = require('../controllers/receitasController')

router.post('/', controller.criaReceita)







module.exports = router