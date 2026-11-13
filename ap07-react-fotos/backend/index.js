require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

app.get('/search', (req, res) => {
    //pegar o valor associado ao parametro query
    //const query = req.query.query
    const query = req.query.query
    
    //pegar a chave de api
    const chaveAPI = process.env.API_KEY

    console.log(query)
    console.log(chaveAPI)
    //criar obj axios
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1/',
        headers: {
            Authorization: chaveAPI
        }
    })

    //disparar requisiçao direcionada à pexels
    pexelsClient.get('/search', {
        params: {
            query: query
        }

    })
    //tratar o resultado, devolver a lista
    .then((result)=>{
        res.json(result.data.photos)
    })
    .catch((erro) => {
        console.log(erro)
        res.end()
    })
    
})

const port = 3000
app.listen(port, () => console.log(`Server OK. Porta ${port}.`))