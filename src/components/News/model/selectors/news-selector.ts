import {AppRootStateType} from "../../../../redux/redux-store";

export const newsSelector = ((state:AppRootStateType)=>state.news.sources)