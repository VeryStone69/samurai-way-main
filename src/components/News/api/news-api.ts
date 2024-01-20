import axios from "axios";

const instance = axios.create({
        baseURL: `https://ok.surf/api/v1/cors/`,
    }
)
export const NewsApi = {
    getNews() {
        return instance.get("news-feed")
    }}

