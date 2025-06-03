import * as http from 'http'
import { app } from './app'

//criar um servidor, com a requisição e com a resposta que ele vai receber
//entra pelo request e devolve pelo response

//é uma função asyncrona pq vai iniciar sem depender de nada
const server = http.createServer(app)

//crio uma contante para puxar a porta do env file
const port = process.env.PORT

//escuta o que está vindo do servidor criado
server.listen(port, ()=>{
    console.log(`Servidor iniciado na ${port}`)
})