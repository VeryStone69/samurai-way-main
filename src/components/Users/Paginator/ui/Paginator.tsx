import s from "./Paginator.module.css"
import React from "react";
import {useDispatch} from "react-redux";
import {nextPageTC} from "../../../../redux/users-reducer";
import {getPages} from "../utils/getPages";

type PropsType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
}
export const Paginator = (props: PropsType) => {
    const dispatch = useDispatch();
    const pages = getPages(props.totalItemCount, props.pageSize, props.currentPage)

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
