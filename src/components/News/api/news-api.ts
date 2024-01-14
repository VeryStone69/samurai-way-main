import axios from "axios";

const NewsApiKey ="05e638a131f345a28bff1994b92d0025"
const instance = axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines/sources?`,
    }
)

export const NewsApi = {
    getNews<ResponseType>() {
        return instance.get(`&category=technology&language=en&apiKey=${NewsApiKey}`)
    }}

export type ResponseType = {
    status?: "ok"|"error"
    code?: string
    message?:string
    sources?: SourcesType[] ;
}

type SourcesType = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
