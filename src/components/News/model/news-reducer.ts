// import {Dispatch} from "redux";
// import {setFetchingAC} from "../../../redux/users-reducer";
// import {NewsApi} from "../api/news-api";
//
// type ResponseType = {
//     status?: "ok" | "error"
//     sources?: SourcesType[] | null;
//     code?: string
//     message?: string
// }
//
//
// export type SourcesType = {
//     id: string;
//     name: string;
//     description: string;
//     url: string;
//     category: string;
//     language: string;
//     country: string;
// }
//
// type NewsActionType = ReturnType<typeof setNewsAC>
// const initialState: ResponseType = {
//     sources: null
// }
//
// export const newsReducer = (state: ResponseType = initialState, action: NewsActionType): ResponseType => {
//     switch (action.type) {
//         case "NEWS/SET-NEWS": {
//             return {...state, sources: action.newsData}
//         }
//         default: {
//             return {...state}
//         }
//     }
// }
//
// export const setNewsAC = (newsData: SourcesType[]) => {
//     return {
//         type: "NEWS/SET-NEWS",
//         newsData
//     } as const
// }
//
// export const getNewsTC = (category:string) => async (dispatch: Dispatch) => {
//     dispatch(setFetchingAC(true));
//     try {
//         const response = await NewsApi.getNews(category);
//         const responseData: ResponseType = response.data;
//         if (responseData.sources) {
//             dispatch(setNewsAC(responseData.sources));
//         }
//     } catch (error) {
//         alert(error)
//     }
//     dispatch(setFetchingAC(false));
// }
//
import {Dispatch} from "redux";
import {setFetchingAC} from "../../../redux/users-reducer";
import {NewsApi} from "../api/news-api";

type NewsType={
    US:CategoryType[] | null
    World:CategoryType[] | null
    Business:CategoryType[] | null
    Technology:CategoryType[] | null
    Entertainment:CategoryType[] | null
    Sports:CategoryType[] | null
    Science:CategoryType[] | null
    Health:CategoryType[] | null
}

export type CategoryType ={
    link: string | null
    og: string | null
    title: string | null
}



type NewsActionType = ReturnType<typeof setNewsAC>
const initialState: NewsType = {
    US:null,
    World:null,
    Business:null,
    Technology:null,
    Entertainment:null,
    Sports:null,
    Science:null,
    Health:null,
}

export const newsReducer = (state: NewsType = initialState, action: NewsActionType): NewsType => {
    switch (action.type) {
        case "NEWS/SET-NEWS": {
            return {...action.newsData}
        }
        default: {
            return {...state}
        }
    }
}

export const setNewsAC = (newsData:NewsType ) => {
    return {
        type: "NEWS/SET-NEWS",
        newsData
    } as const
}

export const getNewsTC = () => async (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true));
    try {
        const response = await NewsApi.getNews();
        const responseData: NewsType = response.data;
        if (responseData) {
            const limitedNewsData: NewsType = {
                US: responseData.US?.slice(0, 10) || null,
                World: responseData.World?.slice(0, 10) || null,
                Business: responseData.Business?.slice(0, 10) || null,
                Technology: responseData.Technology?.slice(0, 10) || null,
                Entertainment: responseData.Entertainment?.slice(0, 10) || null,
                Sports: responseData.Sports?.slice(0, 10) || null,
                Science: responseData.Science?.slice(0, 10) || null,
                Health: responseData.Health?.slice(0, 10) || null,
            };
            dispatch(setNewsAC(limitedNewsData));
        }
    } catch (error) {
        alert(error)
    }
    dispatch(setFetchingAC(false));
}
