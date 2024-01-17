import {PostDataType} from "../App";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi, SaveUserProfileChangesType} from "../api/api";
import {AppRootStateType, AppThunkDispatch} from "./redux-store";
import {getProfileDataTC} from "./users-reducer";

export type ServerErrors = {
    resultCode: number
    messages: [string],
    data: {}
}

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
    facebook: null | string;
    website: null | string;
    vk: null | string;
    twitter: null | string;
    instagram: null | string;
    youtube: null | string;
    github: null | string;
    mainLink: null | string;
}

export interface RootObjectPhotos {
    small: string;
    large: string;
}


export type ProfileReducerType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof savePhotoSuccess>

export type TaskType = {
    id: string
    message: string
    likesCount: number
}
export type TasksStateType = {
    posts: TaskType[]
    newPostsText: string
    profile: ProfileDataType
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
        aboutMe: "About me",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "I'm looking for a job for fun. Slavery is not offered.",
        fullName: "Guest",
        userId: 1079,
        photos: {
            small: "",
            large: ""
        }
    },
    status: "status from store",
}


export const profileReducer = (state: TasksStateType = initialState, action: ProfileReducerType): TasksStateType => {
    switch (action.type) {
        case "PROFILE/ADD-POST": {
            let newMessage: PostDataType = {id: v1(), message: action.newPost, likesCount: 0};
            return {...state, posts: [newMessage, ...state.posts], newPostsText: ""}
        }
        case "PROFILE/SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "PROFILE/SET-PROFILE-STATUS": {
            return {...state, status: action.status}
        }
        case "PROFILE/SET-USER-PHOTO": {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default :
            return {...state}
    }
}

export const addPostAC = (newPost: string) => {
    return {
        type: "PROFILE/ADD-POST",
        newPost
    } as const
}

export const setUserProfile = (profile: ProfileDataType) => {
    return {
        type: "PROFILE/SET-USER-PROFILE" as const,
        profile
    }
}
export const savePhotoSuccess = (photos: RootObjectPhotos) => {
    return {
        type: "PROFILE/SET-USER-PHOTO" as const,
        photos
    }

}

export const setStatusAC = (status: string) => {
    return {type: "PROFILE/SET-PROFILE-STATUS" as const, status}
}
export const getProfileStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateProfileStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const saveProfilePhotoTC = (photos: File) => async (dispatch: Dispatch) => {
    const response = await profileApi.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const updateUserProfileChangesTC = (data: SaveUserProfileChangesType) => async (dispatch: AppThunkDispatch, getState: () => AppRootStateType) => {
    try {
        const userId = getState().profile.profile.userId;
        const response = await profileApi.saveUserProfileChanges(data);
        if (response.data.resultCode === 0) {
            await dispatch(getProfileDataTC(userId));
            await dispatch(getProfileStatusTC(userId));
        } else {
            return Promise.reject(response.data.messages);
        }
    } catch (error) {
        return Promise.reject(error);
    }
}



