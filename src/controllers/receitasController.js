const mongoose = require('mongoose')
const Receita = require('../models/receitaSchema')

const criaReceita = async (req, res)=>{
    const receitas = new receitas({
        _id: mongoose.Schema.Types.ObjectId(),
        nome: req.body.nome,
        dataDeCriação: req.body.dataDeCriação
    })
    
    const receitasJaExiste = await receita.findOne({nome: req.body.nome})
    if(receitaJaExiste) {
        return res.status(409).json({error: "Receita já cadastrada"})
    
     }
 
     try{
         const novaReceita = await receitas.save()
         res.status(201).json(novaReceita)
     }catch (err) {
         res.status(500).json({mensage: err.mensage})
     }
 
 }
 
 
 
 module.exports = {
    criaReceita 
 }





