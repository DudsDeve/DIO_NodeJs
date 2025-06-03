import fastify from "fastify";
import { request } from "http";
import cors from "@fastify/cors";

//ja criei o servidor
const server = fastify({logger: true})

server.register(cors,{
  origin:"*" //aqui eu coloco somente o servidor/site que pode utilizar minha api
  //aqui no caso qualquer um pode consumir a api
  //com methods: voce coloca apenas os metodos que voce quer que seja protegido
})

const teams = [
  {id:1, name: "red bull"},
  {id:2, name: "mercedes"},
  {id:3, name: "benz"}
]
server.get("/teams", async(request,response)=>{
  //eu passo o tipo e o status de retorno
  response.type("application/json").code(200)

  return teams
})


const drivers = [
  {id:1, name: "riccardo"},
  {id:2, name: "teste"}


]
server.get("/drivers", async(request,response)=>{

  response.type("application/json").code(200)
  return drivers
})

interface DriveParams{
  id:string
}
server.get<{Params: DriveParams}>("/drivers/:id", async(request,response)=>{
  //para fazer a requisição utilizamos o request
  //no caso ele esta requirindo/puxando o id dos parametros da rota

  const id = parseInt(request.params.id)
  //estou pegando o parametro id da requisição 
  //converti para número


  const driver = drivers.find((d) => d.id === id)
  //aqui eu pego dou um find para procurar pelo o id dos meus drivers ja existentes
  //com o id que está sendo passado no parametro de requisição da rota
  //como por exemplo o: http://localhost:3333/drivers/1
  //EU SÓ COMPARO O QUE TEM NO BANCO DE DADOS, COM O PARAMETRO ID DA ROTA

  if(!driver){
    response.type("application/json").code(404)
    return {error: "driver not found"}
  }else{
    response.type("application/json").code(200)
    return driver
  }

});

//faço o servidor escutar
server.listen({port:3333}, ()=>{
console.log("servidor escutando")
})