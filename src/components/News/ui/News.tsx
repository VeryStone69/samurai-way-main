import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getNewsTC, SourcesType} from "../model/news-reducer";
import {NewsCard} from "../NewsCard/ui/NewsCard";
import {AppRootStateType, useAppSelector} from "../../../redux/redux-store";
import {fetchSelector} from "../../Users/selectors/usersContainer-selector";
import {UsersLoader} from "../../common/UsersLoader";

export const News = () => {
    const newsSelector = ((state:AppRootStateType)=>state.news.sources)
    const news = useAppSelector(newsSelector)
    const fetch = useAppSelector(fetchSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsTC())
    }, []);
    return (
        <>
            {fetch.isFetching
                ? <UsersLoader/>
                : <>
                    {news?.map((el:SourcesType)=>{
                        return <div><NewsCard key={el.id} data={el}/></div>
                    })}
                </>
            }
        </>
    );
};
