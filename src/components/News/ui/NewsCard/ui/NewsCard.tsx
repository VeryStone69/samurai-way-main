import React from 'react';
import s from "./NewsCard.module.css"
import {CategoryType} from "../../../model/news-reducer";
type PropsType = {
    data: CategoryType
}
export const NewsCard = (props:PropsType) => {
    return (
        <div className={s.newsCardContainer}>
            <div className={s.contentContainer}>
                {/*<div className={s.category}>{props.data.title?.toUpperCase()}</div>*/}
                <a href={props.data.link||""} className={s.title}>{props.data.title}</a>
                <div className={s.description}><img className={s.newsImage} src={props.data.og||""} alt="image for news"/></div>
                <div className={s.metaInfo}>
                    {/*<span>{props.data.country}</span> | <span>{props.data.language}</span>*/}
                </div>
            </div>
        </div>
    );
};
