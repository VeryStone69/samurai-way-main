import {Dispatch} from "redux";
import {setFetchingAC} from "../../../redux/users-reducer";
import {NewsApi} from "../api/news-api";

type ResponseType = {
    status?: "ok" | "error"
    sources?: SourcesType[] | null;
    code?: string
    message?: string
}

export type SourcesType = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

type NewsActionType = ReturnType<typeof setNewsAC>
const initialState: ResponseType = {
    sources: null
}

export const newsReducer = (state: ResponseType = initialState, action: NewsActionType): ResponseType => {
    switch (action.type) {
        case "NEWS/SET-NEWS": {
            return {...state, sources: action.newsData}
        }
        default: {
            return {...state}
        }
    }
}

export const setNewsAC = (newsData: SourcesType[]) => {
    return {
        type: "NEWS/SET-NEWS",
        newsData
    } as const
}

export const getNewsTC = (category:string) => async (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true));
    try {
        const response = await NewsApi.getNews(category);
        const responseData: ResponseType = response.data;
        if (responseData.sources) {
            dispatch(setNewsAC(responseData.sources));
        }
    } catch (error) {
        alert(error)
    }
    dispatch(setFetchingAC(false));
}