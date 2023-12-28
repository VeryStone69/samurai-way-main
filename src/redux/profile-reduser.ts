import {PostDataType} from "../App";
import {v1} from "uuid";
import veryStone from "../assets/images/veryStone.jpg"
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

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
    website: null | string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: null | string;
    github: string;
    mainLink: null | string;
}

export interface RootObjectPhotos {
    small: string;
    large: string;
}


export type ProfileReduserType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>

export type TaskType = {
    id: string
    message: string
    likesCount: number
}
export type TasksStateType = {
    posts: TaskType[]
    newPostsText: string
    profile: ProfileDataType | null
    status: string
}
const initialState: TasksStateType = {
    posts: [{id: v1(), message: "Hi, how are you", likesCount: 12},
        {id: v1(), message: "It's my second post", likesCount: 15},
        {id: v1(), message: "Number three", likesCount: 99},
        {id: v1(), message: "Yo4", likesCount: 1},
        {id: v1(), message: "Yo5", likesCount: 2},
        {id: v1(), message: "Yo6", likesCount: 3},],
    newPostsText: "Your text",
    profile: {
        aboutMe: "I live this life",
        contacts: {
            facebook: "facebook.com",
            website: "google.com",
            vk: "vk.com",
            twitter: "https://twitter.com/",
            instagram: "instagra.com/",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "I'm looking for a job for fun. Slavery is not offered.",
        fullName: "Aliaksandr Kaptsevich",
        userId: 29772,
        photos: {
            small: "",
            large: veryStone
        }
    },
    status: "status from store"

}


export const profileReduser = (state: TasksStateType = initialState, action: ProfileReduserType): TasksStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newMessage: PostDataType = {id: v1(), message: action.newPost, likesCount: 0};
            return {...state, posts: [newMessage, ...state.posts], newPostsText: ""}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-PROFILE-STATUS": {
            return {...state, status: action.status}
        }
        default :
            return {...state}
    }
}

export const addPostAC = (newPost: string) => {
    return {
        type: "ADD-POST",
        newPost
    } as const
}

export const setUserProfile = (profile: ProfileDataType) => {
    return {
        type: "SET-USER-PROFILE" as const,
        profile
    }
}

export const setStatusAC = (status: string) => {
    return {type: "SET-PROFILE-STATUS" as const, status}
}
export const getProfileStatusTC = (userId: string | undefined) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
                dispatch(setStatusAC(res.data))
            }
        )
}

export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch) => {

    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })


}


