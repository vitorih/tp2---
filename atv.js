const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

const dotenv=require('dotenv')


if(process.env.OMG === "DEV"){
    dotenv.config({path:'./config/.env.dev'})
}
if(process.env.OMG === "PROD"){
    dotenv.config({path:'./config/.env.prod'})
}

const modelodeUsuario = mongoose.model('contas', new mongoose.Schema({
    email: String,
    password: String
}))


mongoose.connect('mongodb://127.0.0.1:27017/haha') // process.env.URL
 .then(()=>{

app.post('/login/', async (req,res)=>{
    const usuarioEncontrado= await modelodeUsuario.findOne({email: req.body.email, cpf: req.body.cpf})
    if(!usuarioEncontrado){
        return res.send('usuário não encontrado')
    }
    res.send(usuarioEncontrado)
})
app.post('/getProdutos/', async (req,res)=>{
    const produtoEncontrado = await modelodeUsuario.findOne({colarCoraçãoEternityemOuroRoséR$249000: req.body.colarCoraçãoEternityemOuroRoséR$249000, pendentesRemovíveisPraPérolaseToáziosR$139000: req.body.pendentesRemovíveisPraPérolaseToáziosRS139000, meiaAliançaEterniyemOuroRosé18KeDiamantesR$415000: req.meiaAliançaEterniyemOuroRosé18KeDiamantesR, anelLefeTopázioAzulR$29000: req.body. anelLefeTopázioAzulR$2900 })
    if(!produtoEncontrado){
        return res.send('produto não encontrado')
    }
    res.send(produtoEncontrado)
})
   
app.post('/cadastro',async (req,res) =>{
    const usuarioCriado = await modelodeUsuario.create({email: req.body.email, nomeCompleto: req.body.nomeCompleto, datadenascimento: req.body.datadenascimento, cpf: req.body.cpf, senha: req.body.senha, endereço: req.body.endereço})
    res.send(usuarioCriado)
})

app.post('/postprodutosAdmin',async (req,res) =>{
    const usuarioCriado = await modelodeUsuario.create({colarCoraçãoEternityemOuroRoséR$249000: req.body.colarCoraçãoEternityemOuroRoséR$249000, pendentesRemovíveisPraPérolaseToáziosR$139000: req.body.pendentesRemovíveisPraPérolaseToáziosRS139000, meiaAliançaEterniyemOuroRosé18KeDiamantesR$415000: req.meiaAliançaEterniyemOuroRosé18KeDiamantesR, anelLefeTopázioAzulR$29000: req.body. anelLefeTopázioAzulR$2900 })
    res.send(usuarioCriado)
    
})


app.put('/postatendimentoaocliente', async (req,res)=>{
    const usuarioAtualizado = await modelodeUsuario.findOneAndUpdate({email: req.body.email, whatsapp: req.body.whatsapp, acessoapaginaMinhaConta: req.body.acessoapaginaMinhaConta })
    res.send({ message: "dados atualizados com sucesso!" })
})
  
app.delete('/delete', async (req,res)=>{
    const usuarioDeletado = await modelodeUsuario.deleteOne({email: req.body.email, password: req.body.password})
    res.send(usuarioDeletado)
})  

app.use((req,res)=>{
    res.send('Não foi possível encontrar sua rota')
})

app.listen(8000, ()=>console.log(`o servidor ta rodando, é nessa porta aqui ó: ${8000}`))

})
