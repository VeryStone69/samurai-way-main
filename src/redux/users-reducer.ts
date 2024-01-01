import {Dispatch} from "redux";
import {authApi, profileApi, usersAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {setUserDataAC} from "./auth-reducer";
import {AppThunkDispatch} from "./redux-store";

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


export const usersReducer = (state: UsersDataType = initialState, action: UsersReducerType): UsersDataType => {
    switch (action.type) {
        case "USERS/FOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "USERS/UNFOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "USERS/SET-USERS": {
            return {...state, items: action.users.items}
        }
        case "USERS/SET-PAGE": {
            return {...state, currentPage: action.numberPage}
        }
        case "USERS/SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "USERS/SET-TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.fetch}
        }
        case "USERS/TOGGLE-IS-FOLLOWING-PROGRESS": {
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
        type: "USERS/FOLLOW",
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "USERS/UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: UsersDataType) => {
    return {
        type: "USERS/SET-USERS",
        users
    } as const
}
export const setCurrentPageAC = (numberPage: number) => {
    return {
        type: "USERS/SET-PAGE",
        numberPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "USERS/SET-TOTAL-COUNT",
        totalCount
    } as const
}
export const setFetchingAC = (fetch: boolean) => {
    return {
        type: "USERS/SET-TOGGLE-IS-FETCHING" as const,
        fetch
    }
}
export const toggleFollowingProgressAC = (toggle: boolean, userId: number) => ({
    type: "USERS/TOGGLE-IS-FOLLOWING-PROGRESS" as const,
    userId,
    toggle
})


// =====-THUNK-=====
export const getUsersTC = (pageSize: UsersDataType) => async (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    const response = await usersAPI.getUsers(pageSize.currentPage, pageSize.pageSize)
    dispatch(setCurrentPageAC(pageSize.currentPage))
    dispatch(setFetchingAC(false))
    dispatch(setUsersAC(response))
    dispatch(setTotalUsersCountAC(response.totalCount))
}
export const nextPageTC = (numberPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    const response = await usersAPI.getUsers(numberPage, pageSize)
    dispatch(setUsersAC(response))
    dispatch(setFetchingAC(false))
    dispatch(setCurrentPageAC(numberPage))
}
export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const response = await usersAPI.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(followAC(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}
export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const response = await usersAPI.unFollowUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(unFollowAC(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}
export const getProfileDataTC = (userId: string | undefined) => async (dispatch: Dispatch) => {
    const response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {
    return await authApi.me().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(res.data, true))
        }
    })
}


