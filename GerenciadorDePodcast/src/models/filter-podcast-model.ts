import { Podscasts } from "./podcast-model"

export interface FilterPodCastModel{
    statusCode:number
    body: Podscasts[]
}