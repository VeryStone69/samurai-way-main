import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {CategoryType, getNewsTC} from "../model/news-reducer";
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
        dispatch(getNewsTC())
    }, []);
    const changeCategoryHandler = (name: string) => {
        dispatch(getNewsTC())
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
                    {news?.map((el: CategoryType) => {
                        return <div key={el.og}><NewsCard data={el}/></div>
                    })}
                </>
            }
        </>
    );
};
