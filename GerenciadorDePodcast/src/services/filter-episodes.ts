import { IncomingMessage } from "http"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { url } from "inspector";
import { FilterPodCastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined)
:Promise<FilterPodCastModel> =>{
//sempre que for tipar e tiver um async na frente, preciso escrever Pomise antes

    //defino a interface de retorno, como eu quero que ela venha
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []

    }

//busco os dados

//http://localhost:3636/api/episodes?p=flow
//a posição 0 vai ser tudo antes de episodes
//a posição 1 vai ser todo valor depois de ?p= que seria flow no caso
//se ele nãoa char vai retornar vazio
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString)

    //verifico se tem conteúdo

    //o código de status vai ser igual a... se tiver conteúdo vai ser OK se bão tiver NO_CONTENT
    //se tiver conteudo  (data.length !== 0)
    responseFormat.statusCode = data.length !== 0? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data

    return responseFormat
}