import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {CategoryType, getNewsTC} from "../model/news-reducer";
import {NewsCard} from "./NewsCard/ui/NewsCard";
import {useAppSelector} from "../../../redux/redux-store";
import {fetchSelector} from "../../Users/selectors/usersContainer-selector";
import {UsersLoader} from "../../common/UsersLoader";
import {newsSelector} from "../model/selectors/news-selector";
import s from "./News.module.css"

type CategoryNewsType = "Technology" | "Business" | "Health" | "Science" | "World";

export const News = () => {
    const categoryNews: CategoryNewsType[] = ["Technology", "Business", "Health", "Science", "World"];
    const [currentCategory, setCurrentCategory] = useState(categoryNews[0])
    const news = useAppSelector(newsSelector)[currentCategory]
    const isFetching = useAppSelector(fetchSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsTC())
    }, []);
    const changeCategoryHandler = (name: CategoryNewsType) => {
        dispatch(getNewsTC())
        setCurrentCategory(name)
    }
    return (
        <>
            <div className={s.buttonCategoryContainer}>
                {categoryNews.map((nameCategory: CategoryNewsType) => {
                    return <button
                        className={currentCategory === nameCategory ? s.categorySelected : s.buttonChangeCategory}
                        key={nameCategory}
                        onClick={() => changeCategoryHandler(nameCategory)}>{nameCategory}</button>
                })}
            </div>
            {isFetching
                ? <UsersLoader/>
                : <>
                    {news?.map((el: CategoryType) => {
                        return <div key={el.og}><NewsCard data={el}/></div>
                    })}
                </>
            }
        </>
    );
};
