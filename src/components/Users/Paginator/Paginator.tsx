import s from "../Users.module.css";
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
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPageChanged = (numberPage: number) => {
        dispatch(nextPageTC(numberPage, props.pageSize))
    }
    return (
        <div className={s.usersPagesNumber}>{pages.map((el, index) => (
            <span key={index}
                  className={props.currentPage === el ? s.pageSelected : ""}
                  onClick={() => {
                      onPageChanged(el)
                  }}>
                    {el}
                </span>))}
        </div>
    )
}
