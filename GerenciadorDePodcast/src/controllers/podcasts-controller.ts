import { IncomingMessage, ServerResponse, STATUS_CODES } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { FilterPodCastModel } from "../models/filter-podcast-model";

//para pegar a lista com os episódios
export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{

    const content = await serviceListEpisodes()

    //aqui estou dizendo que no header, ao retornar certo uma requisição com status 200
    //ele vai me retornar um content-type : application/json
    //para INFORMAR para o FRONT-END que o conteúdo que está indo é um json
   res.writeHead(StatusCode.OK, {"Content-Type" : ContentType.JSON});

   //aqui seria o final da requisição que seria enviada para o navegador
   //PRECISAMOS utilizar o JSON.stringify, porque é o único jeito do navegador ler
   res.end(JSON.stringify(
    content
    //aqui estou passando o conteúdo do meu service, para a resposta da requisição
   ))
};


export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{

//aqui vou passar a url da requisição que eu fiz no filter
//que seria uma requisição query com separação do parametro
const content:FilterPodCastModel = await serviceFilterEpisodes(req.url)


/*estou passando isso export interface FilterPodCastModel{
    statusCode:number
    body: Podscasts[]

    //onde no body vou poder passar tudo que tem dentro de Podcasts
}*/

res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON})
res.end(JSON.stringify(content.body))
}

//no controller o papel dele é controlar a aplicação, 
// então ele só pega a requisição, fazer alguma verificação e devolver o conteúdo