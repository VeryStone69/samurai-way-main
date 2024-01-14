import axios from "axios";

const NewsApiKey ="05e638a131f345a28bff1994b92d0025"
const instance = axios.create({
        baseURL: `https://newsapi.org/v2/top-headlines/sources?`,
    }
)

export const NewsApi = {
    getNews(category:string) {
        return instance.get(`&category=${category}&language=en&apiKey=${NewsApiKey}`)
    }}


