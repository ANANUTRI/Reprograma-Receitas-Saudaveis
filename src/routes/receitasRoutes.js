const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const receita = require('../models/receitaSchema')

router.post('/', async (req, res)=>{
   const receitas = new receitas({
       _id: mongoose.Schema.Types.ObjectId(),
       nome: req.body.nome,
       dataDeCriação: req.body.dataDeCriação
   })
    
})









module.exports = router