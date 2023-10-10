const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

if(process.env.OMAGA == 'DEV'){
    dotenv.config({path: './config/.env.dev'})
}


if(process.env.OMAGA == 'PROD'){
    dotenv.config({path: './config/.env.prod'})
}


app.use(express.json())

const modelodeUsuario = mongoose.model('contas', new mongoose.Schema({
    email: String,
    password: String
}))


mongoose.connect(process.env.URL)
 .then(()=>{

app.get('/get/:email', async (req,res)=>{
    const usuarioEncontrado = await modelodeUsuario.findOne({email: req.params.email})
    console.log(usuarioEncontrado);
    res.send(usuarioEncontrado)
})
  
app.post('/post',async (req,res) =>{
    const usuarioCriado = await modelodeUsuario.create({email: req.body.email, password: req.body.password})
    res.send(usuarioCriado)
})

app.put('/put', async (req,res)=>{
    const usuarioAtualizado = await modelodeUsuario.findOneAndUpdate({email: req.body.email, password: req.body.password}, {email: req.body.newemail, password: req.body.newpassword})
    res.send(usuarioAtualizado)
})
  
app.delete('/delete', async (req,res)=>{
    const usuarioDeletado = await modelodeUsuario.deleteOne({email: req.body.email, password: req.body.password})
    res.send(usuarioDeletado)
})  

app.use((req,res)=>{
    res.send('Não foi possível encontrar sua rota')
})

app.listen(4000, ()=>console.log(`o servidor esta fucionando, é nessa porta aqui ó: ${4000}`))

})