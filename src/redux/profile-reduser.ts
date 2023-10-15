import {PostDataType} from "../App";
import {v1} from "uuid";

export interface ProfileDataType {
    aboutMe: string;
    contacts: RootObjectContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: RootObjectPhotos;
}

export interface RootObjectContacts {
    facebook: string;
    website: null|string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: null|string;
    github: string;
    mainLink: null|string;
}

export interface RootObjectPhotos {
    small: string;
    large: string;
}


export type ProfileReduserType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfile>

export type TaskType = {
    id: string
    message: string
    likesCount: number
}
export type TasksStateType = {
    posts: TaskType[]
    newPostsText: string
    profile: ProfileDataType | null
}
const initialState: TasksStateType = {
    posts: [{id: v1(), message: "Hi, how are you", likesCount: 12},
        {id: v1(), message: "It's my second post", likesCount: 15},
        {id: v1(), message: "Number three", likesCount: 99},
        {id: v1(), message: "Yo4", likesCount: 1},
        {id: v1(), message: "Yo5", likesCount: 2},
        {id: v1(), message: "Yo6", likesCount: 3},],
    newPostsText: "Your text" ,
    profile:{
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }

}


export const profileReduser = (state: TasksStateType = initialState, action: ProfileReduserType): TasksStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newMessage: PostDataType = {id: v1(), message: state.newPostsText, likesCount: 0};
            return {...state, posts: [newMessage, ...state.posts], newPostsText: ""}
        }
        case "UPDATE-NEW-TEXT": {
            return {...state, newPostsText: action.newText}
        }
        case "SET-USER-PROFILE":{
            return {...state, profile:action.profile}
        }
        default :
            return {...state}
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-TEXT",
        newText
    } as const
}

export const setUserProfile = (profile: ProfileDataType) => {
    return {
        type: "SET-USER-PROFILE" as const,
        profile
    }
}


