import {Dispatch} from "redux";
import {setFetchingAC} from "../../../redux/users-reducer";
import {NewsApi, ResponseType} from "../api/news-api";

type ResponseNewsType = {
    status?: "ok"|"error"
    sources?: SourcesType[] | null;
    code?: string
    message?:string
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
const initialState:ResponseNewsType = {
    sources: null
}

export const newsReducer = (state:ResponseNewsType=initialState,action:NewsActionType):ResponseNewsType=>{
    switch (action.type){
        case "NEWS/SET-NEWS":{
            return {...state, sources: action.newsData}
        }
        default: {
            return {...state}
        }
    }
}

export const setNewsAC = (newsData:SourcesType[]) =>{
    return{
        type:"NEWS/SET-NEWS",
        newsData
    } as const
}

export const getNewsTC = ()=> async (dispatch:Dispatch)=>{
    dispatch(setFetchingAC(true));

    try {
        // Ответ от Axios будет иметь тип AxiosResponse, содержащий данные в свойстве data
        const response = await NewsApi.getNews();
        const responseData: ResponseType = response.data; // Извлекаем data, которая должна соответствовать ResponseType

        if (responseData.sources) {

            dispatch(setNewsAC(responseData.sources));
        }
    } catch (error) {
        alert(error)
    }

    dispatch(setFetchingAC(false));
}