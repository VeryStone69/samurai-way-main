import {v1} from "uuid";

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unFollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

type UsersReduserType = FollowActionType | UnFollowActionType | SetUsersActionType

export type UsersType = {
    id: string
    followed: boolean
    fullName: string
    photoURL: string
    status: string
    location: {
        country: string
        city: string
    }
}
export type UsersDataType = {
    users: UsersType[]
}

const initialState: UsersDataType = {
    users: [
        {
            id: v1(),
            followed: false,
            fullName: "Dmitry",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "I am OK!",
            location: {country: "Belarus", city: "Minks"}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Dmitry",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "I am OK!",
            location: {country: "Belarus", city: "Minks"}
        },
        {
            id: v1(),
            followed: true,
            fullName: "Sasha",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "I am Fine!",
            location: {country: "Ukraine", city: "Kiew"}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Marek",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "W parzadku",
            location: {country: "Poland", city: "Warszawa"}
        },
        {
            id: v1(),
            followed: true,
            fullName: "John",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "Super,bitch",
            location: {country: "USA", city: "NewMexico"}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Naurau",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "Maurauk!",
            location: {country: "Finland", city: "Varkaus"}
        },
        {
            id: v1(),
            followed: true,
            fullName: "Bill",
            photoURL: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png",
            status: "Good",
            location: {country: "UK", city: "London"}
        },

    ]
}

export const usersReduser = (state: UsersDataType = initialState, action: UsersReduserType): UsersDataType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return {...state}
    }
}

export const followAC = (userId:string) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unFollowAC = (userId:string) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setUsersAC = (users:UsersType[]) => {
    return {
        type: "SET-USERS",
        users
    }as const
}

