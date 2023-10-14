
type UsersReduserType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setFetchingAC>

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
    totalCount?: number
    error?: null | string
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
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
    isFetching:false
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
            return {...state, items: action.users.items}
        }
        case "SET-PAGE": {
            return {...state, currentPage: action.numberPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount:action.totalCount}
        }
        case "SET-TOGGLE-IS-FETCHING":{
            return {...state, isFetching:action.fetch}
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

export const setFetchingAC = (fetch:boolean)=>{
    return {
        type: "SET-TOGGLE-IS-FETCHING" as const,
        fetch
    }
}

