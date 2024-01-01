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
    // const dispatch = useDispatch();
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    // const onPageChanged = (numberPage: number) => {
    //     dispatch(nextPageTC(numberPage, props.pageSize))
    // }
    // return (
    //     <div className={s.usersPagesNumber}>{pages.map((el, index) => (
    //         <span key={index}
    //               className={props.currentPage === el ? s.pageSelected : ""}
    //               onClick={() => {
    //                   onPageChanged(el)
    //               }}>
    //                 {el}
    //             </span>))}
    //     </div>
    // )
    const {totalUsersCount,pageSize,currentPage}=props
    const dispatch = useDispatch();

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    let leftPortionPageNumber = Math.max(1, currentPage - 4);
    let rightPortionPageNumber = Math.min(pagesCount, currentPage + 5);

    if (currentPage > 5) {
        pages.push(1);
        if (currentPage > 6) {
            pages.push('...');
        }
    }

    for (let i = leftPortionPageNumber; i <= rightPortionPageNumber; i++) {
        pages.push(i);
    }

    if (currentPage < pagesCount - 5) {
        if (currentPage < pagesCount - 6) {
            pages.push('...');
        }
        pages.push(pagesCount);
    }

    const onPageChanged = (pageNumber: number) => {

        dispatch(nextPageTC(pageNumber, pageSize));
    };

    return (
        <div className={s.usersPagesNumber}>
            {pages.map((page, index) => {
                if (page === '...') {
                    return <span key={index}>...</span>;
                } else {
                    return (
                        <span key={index}
                              className={currentPage === page ? s.pageSelected : ""}
                              onClick={() => onPageChanged(+page)}>
                            {page}
                        </span>
                    );
                }
            })}
        </div>
    );
}
