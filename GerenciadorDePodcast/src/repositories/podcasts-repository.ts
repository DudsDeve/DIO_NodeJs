//o repository serve para ler/transcrever os dados que vem 
//do banco de dados ou de um json

//file sistem ele vai poder ler e escrever em arquivos do sistema
import fs from 'fs'

//para apontar o arquivo que eu quero que seja lido
import path from 'path'
import { json } from 'stream/consumers'
import { Podscasts } from '../models/podcast-model'



//---------Para ler o CAMINHO do arquivo

//ele vai pegar o caminho do diretório(pasta) dinamicamente
// ele sempre vai puxar a src 
// então ele vai juntar o caminho da src, com o caminho onde está o json dos dados
const pathData = path.join(__dirname, "../repositories/podcasts.json")

//--------Para ler O ARQUIVO

export const repositoryPodcast = async (podcastName?:string): Promise<Podscasts[]> => {

    //aqui a contante vai ler o arquivo todo e só vai executar por ser Sync,
    //  depois que acabar de ler tudo
    const rawData = fs.readFileSync(pathData, "utf-8" )
    // primeiro passamos o caminho do arquivo, 
    // e o utf-8 quer dizer que dentro dele consegue ler palavras com acentuação

    //aqui ele vai ler o arquivo e transformar em um json em memória
    let jsonFile = JSON.parse(rawData)


    //aqio vou filtrar o dado para utilizar em outro service
    if(podcastName){
        jsonFile = jsonFile.filter((podcast: Podscasts) => podcast.podcastName=== podcastName)
    }
    //aqui estou pegando o jsonFile que foi transformado
    //e estou utilizando um filtro, que para cada podcast que eu percorrer eu pegue
    // o podcastName dentro do JSON, tem que ser igual ao podcastName que ue vou passar

    return jsonFile

}

