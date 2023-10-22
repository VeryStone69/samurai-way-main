import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type UsersReducerType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}
export type UsersDataType = {
    items: UsersType[]
    totalCount?: number
    error?: null | string
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: UsersDataType = {
    items: [
        {
            id: 1,
            name: "Dmitry",
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: "I am OK!",
            followed: false,
        }
    ],
    totalCount: 725039,
    error: null,
    pageSize: 10,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReduser = (state: UsersDataType = initialState, action: UsersReducerType): UsersDataType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, items: action.users.items}
        }
        case "SET-PAGE": {
            return {...state, currentPage: action.numberPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET-TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.fetch}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.toggle
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }


        default :
            return {...state}
    }
}


//=====-ACTION-=====
export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: UsersDataType) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setCurrentPageAC = (numberPage: number) => {
    return {
        type: "SET-PAGE",
        numberPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount
    } as const
}
export const setFetchingAC = (fetch: boolean) => {
    return {
        type: "SET-TOGGLE-IS-FETCHING" as const,
        fetch
    }
}
export const toggleFollowingProgressAC = (toggle: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS" as const,
    userId,
    toggle
})


// =====-THUNK-=====
export const getUsersTC = (pageSize: UsersDataType) => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    usersAPI.getUsers(pageSize.currentPage, pageSize.pageSize)
        .then((data) => {
            dispatch(setCurrentPageAC(pageSize.currentPage))
            dispatch(setFetchingAC(false))
            dispatch(setUsersAC(data))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
}
export const nextPageTC = (numberPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    usersAPI.getUsers(numberPage, pageSize)
        .then((data) => {
            dispatch(setUsersAC(data))
            dispatch(setFetchingAC(false))
        })
    dispatch(setCurrentPageAC(numberPage))
}
 export const followTC = (userId:number)=>(dispatch:Dispatch)=>{
     dispatch(toggleFollowingProgressAC(true, userId))
     usersAPI.followUser(userId)
         .then(res => {
             if (res.data.resultCode === 0) {
                 dispatch(followAC(userId))

             }
             dispatch(toggleFollowingProgressAC(false, userId))
         })
 }
 export const unFollowTC = (userId:number)=>(dispatch:Dispatch)=>{
     dispatch(toggleFollowingProgressAC(true, userId))
     usersAPI.unFollowUser(userId)
         .then(res => {
             if (res.data.resultCode === 0) {
                 dispatch(unFollowAC(userId))
             }
             dispatch(toggleFollowingProgressAC(false, userId))
         })
 }

