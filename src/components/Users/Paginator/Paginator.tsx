import s from "./Paginator.module.css"
import React from "react";
import {useDispatch} from "react-redux";
import {nextPageTC} from "../../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
}
export const Paginator = (props: PropsType) => {
    const dispatch = useDispatch();

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    let leftPortionPageNumber = Math.max(1, props.currentPage - 4);
    let rightPortionPageNumber = Math.min(pagesCount, props.currentPage + 5);

    if (props.currentPage > 5) {
        pages.push(1);
        if (props.currentPage > 6) {
            pages.push('...');
        }
    }

    for (let i = leftPortionPageNumber; i <= rightPortionPageNumber; i++) {
        pages.push(i);
    }

    if (props.currentPage < pagesCount - 5) {
        if (props.currentPage < pagesCount - 6) {
            pages.push('...');
        }
        pages.push(pagesCount);
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(nextPageTC(pageNumber, props.pageSize));
    };

    return (
        <div className={s.usersPagesNumber}>
            {pages.map((page, index) => {
                if (page === '...') {
                    return <span key={index}>...</span>;
                } else {
                    return (
                        <span key={index}
                              className={props.currentPage === page ? s.pageSelected : ""}
                              onClick={() => onPageChanged(+page)}>
                            {page}
                        </span>
                    );
                }
            })}
        </div>
    );
}
