//Dentro da service eu trato o dado e crio funções

import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceListEpisodes = async () =>{
    const data = await repositoryPodcast()
    //isso basicamente vai no repository e pega toda a lista de podcasts
    return data

}