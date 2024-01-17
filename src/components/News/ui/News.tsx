import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getNewsTC, SourcesType} from "../model/news-reducer";
import {NewsCard} from "./NewsCard/ui/NewsCard";
import {useAppSelector} from "../../../redux/redux-store";
import {fetchSelector} from "../../Users/selectors/usersContainer-selector";
import {UsersLoader} from "../../common/UsersLoader";
import {newsSelector} from "../model/selectors/news-selector";
import s from "./News.module.css"

export const News = () => {
    const categoryNews = ["Technology", "Business", "Health", "Science"];
    const [currentCategory, setCurrentCategory] = useState(categoryNews[0])
    const news = useAppSelector(newsSelector)
    const fetch = useAppSelector(fetchSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsTC(currentCategory))
    }, []);
    const changeCategoryHandler = (name: string) => {
        dispatch(getNewsTC(name))
        setCurrentCategory(name)
    }

    return (
        <>
            {fetch.isFetching
                ? <UsersLoader/>
                : <>
                    <div className={s.buttonCategoryContainer}>
                        {categoryNews.map((nameCategory: string) => {
                            return <button
                                className={currentCategory === nameCategory ? s.categorySelected : s.buttonChangeCategory}
                                key={nameCategory}
                                onClick={() => changeCategoryHandler(nameCategory)}>{nameCategory}</button>
                        })}
                    </div>
                    {news?.map((el: SourcesType) => {
                        return <div key={el.id}><NewsCard data={el}/></div>
                    })}
                </>
            }
        </>
    );
};
