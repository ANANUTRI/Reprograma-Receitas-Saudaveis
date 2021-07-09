const mongoose = require('mongoose')

const receitaSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId , 

    nome : {
        Type: String,
        required: true
    },
    
    ingredientes : [{
        Type : String,
        required: true
    }],    
    modoDePreparo : {
        Type: String,
        required: true
    },
    tempo : {
        Type: String,
    },
    nivel: {
        Type: String,  
    }, 
    dataDeCriação : {
        type: Date,
        required: true,
        default: new Date
    } 
})

module.eports = mongoose.model('receita, receitaSchema')