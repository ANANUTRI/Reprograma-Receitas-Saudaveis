const express = require('express')
const app = express()

app.use(express.json())

const db = require('./src/data/dataConfig')
db.connect()

const receita = require('./src/routes/receitasRoutes.routes')


app.use('/receitas', titulo)



app.listen(3333, ()=> console.log('Servidor rodando!'))



