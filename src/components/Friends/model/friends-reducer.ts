import {Dispatch} from "redux";
import {setCurrentPageAC, setFetchingAC,UsersDataType} from "../../../redux/users-reducer";
import {friendsApi} from "../api/friends-api";
import {clearUserDataAC} from "../../../redux/auth-reducer";

export type FriendsDataType = {
    id: string
    name: string
    img: string
}

const initialState: UsersDataType = {
    items: [],
    totalCount: 725039,
    error: null,
    pageSize: 10,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export const friendsReducer = (state: UsersDataType = initialState, action: FriendsReducerType): UsersDataType => {
    switch (action.type){
        case "FRIENDS/SET-FRIENDS":{
            return {...state, items: action.friends.items}
        }
        case "AUTH/CLEAR-USER-DATA":{
            console.log("friendsReducer")
            return {...initialState}
        }
        default:{
            return {...state}
        }
    }
}

export const setFriendsAC = (friends:UsersDataType)=>{
    return{
        type: "FRIENDS/SET-FRIENDS" ,
        friends
    } as const
}

export const getFriendsTC = (pageSize: UsersDataType) => async (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    const response = await friendsApi.getFriends(pageSize.currentPage, pageSize.pageSize)
    dispatch(setCurrentPageAC(pageSize.currentPage))
    dispatch(setFetchingAC(false))
    dispatch(setFriendsAC(response))
    // dispatch(setTotalUsersCountAC(response.totalCount))
}

type FriendsReducerType = ReturnType<typeof setFriendsAC>|ReturnType<typeof clearUserDataAC>