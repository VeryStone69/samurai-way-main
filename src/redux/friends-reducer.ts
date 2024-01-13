import {v1} from "uuid";
import {AnyAction, Dispatch} from "redux";
import {setCurrentPageAC, setFetchingAC, setTotalUsersCountAC, setUsersAC, UsersDataType} from "./users-reducer";
import {usersAPI} from "../api/api";
import {friendsApi} from "../components/Friends/api/friends-api";

export type FriendsDataType = {
    id: string
    name: string
    img: string
}

// const initialState: FriendsDataType[] = [
//     {
//         id: v1(),
//         name: "Jonh",
//         // img: "https://9obzor.ru/wp-content/uploads/2023/02/obrabotka-foto-neyroseti11.jpg"
//         img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
//     },
//     {
//         id: v1(),
//         name: "Lily",
//         img: "https://w7.pngwing.com/pngs/224/408/png-transparent-avatar-child-girl-kid-avatars-xmas-giveaway-icon.png"
//     },
//     {
//         id: v1(),
//         name: "James",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQ6JaRiKfz-Y1c61i5WpAYWtS0gV5ab91p6kSLmW9msq8hDehPmGrp97yvS97NYK2WpA&usqp=CAU"
//     },
//     {
//         id: v1(),
//         name: "Robert",
//         img: "https://it-tehnik.ru/wp-content/uploads/matureman.png"
//     },
//     {
//         id: v1(),
//         name: "William",
//         img: "https://72tv.ru/uploads/posts/2022-09/1662876293_avatarka-foto-288.jpg"
//     },
// ]
const initialState: UsersDataType = {
    items: [
        {
            id: 1,
            name: "Dmitry",
            uniqueUrlName: null,
            photos: {
                small: null as string|null,
                large: null as string|null
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
export const friendsReducer = (state: UsersDataType = initialState, action: FriendsReducerType): UsersDataType => {
    switch (action.type){
        case "FRIENDS/SET-FRIENDS":{
            return {...state, items: action.friends.items}
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

type FriendsReducerType = ReturnType<typeof setFriendsAC>