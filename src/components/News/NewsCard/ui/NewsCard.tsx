import React from 'react';
import s from "./NewsCard.module.css"
import {SourcesType} from "../../model/news-reducer";
type PropsType = {
    data: SourcesType
}
export const NewsCard = (props:PropsType) => {

    return (
        // <>
        //     <div className={s.newsCardContainer}>
        //         <div>{props.data.category}</div>
        //         <div>{props.data.name}</div>
        //         <div><a href={props.data.url}>{props.data.description}</a></div>
        //     </div>
        // </>
        <div className={s.newsCardContainer}>
            {/* Предположим, что у вас есть стандартное изображение для категории */}
            {/*<img src={`/path/to/images/${data.category}.jpg`} alt={data.name} className={s.newsImage}/>*/}
            <div className={s.contentContainer}>
                <div className={s.category}>{props.data.category.toUpperCase()}</div>
                <a href={props.data.url} className={s.title}>{props.data.name}</a>
                <div className={s.description}>{props.data.description}</div>
                {/* Мета информация */}
                <div className={s.metaInfo}>
                    <span>{props.data.country}</span> | <span>{props.data.language}</span>
                </div>
            </div>
        </div>
    );
};
