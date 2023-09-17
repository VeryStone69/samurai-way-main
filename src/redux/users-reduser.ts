

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unFollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

type UsersReduserType = FollowActionType | UnFollowActionType | SetUsersActionType

export type UsersType = {
    // id: string
    // followed: boolean
    // fullName: string
    // photoURL: string
    // status: string
    // location: {
    //     country: string
    //     city: string
    // }

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
    totalCount: number,
    error: null|string
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
        }],
        totalCount : 725039,
        error : null
}



export const usersReduser = (state: UsersDataType = initialState, action: UsersReduserType): UsersDataType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return  { ...state, items: action.users.items }
        }
        default :
            return {...state}
    }
}

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

