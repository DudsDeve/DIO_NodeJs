import * as http from 'http'

import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from './routes/routes'
import { HttpMethod } from './utils/http-methods'

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {


    //-------QueryString ---- criar valores dinamicos de url
    //vou separar a url quando tiver um ? isso é para retornar um vazio para a tipagem [""]
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]
    
    
    
    //Preciso chamar a função que eu criei no controller para o servidor entender
    // quando tiver o método GET e a url for /api/list , ele vai retornar a lista de episódios
        if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
            //'/api/list' com isso eu acabei de criar a rota para list
    
        //await depende esperar que algo aconteça
        await getListEpisodes(req, res)
    }
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
                //'/api/list' com isso eu acabei de criar a rota para episodes
    
        await getFilterEpisodes(req, res)
    }
    
    }
