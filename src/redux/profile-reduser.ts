import {PostDataType} from "../App";
import {v1} from "uuid";

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewTextActionType = ReturnType<typeof updateNewPostAC>

export type ProfileReduserType = AddPostActionType|UpdateNewTextActionType
export type TaskType = {
    id: string
    message: string
    likesCount: number
}
export type TasksStateType = {
        posts:TaskType[]
        newPostsText: string
}
const initialState: TasksStateType = {
        posts: [{id: v1(), message: "Hi, how are you", likesCount: 12},
            {id: v1(), message: "It's my second post", likesCount: 15},
            {id: v1(), message: "Number three", likesCount: 99},
            {id: v1(), message: "Yo4", likesCount: 1},
            {id: v1(), message: "Yo5", likesCount: 2},
            {id: v1(), message: "Yo6", likesCount: 3},],
        newPostsText: "Your text"

}


export const profileReduser = (state:TasksStateType=initialState,action: ProfileReduserType):TasksStateType =>{
    switch (action.type){
        case "ADD-POST":{
            let newMessage: PostDataType = {id: v1(), message: state.newPostsText, likesCount: 0};
            state.posts.unshift(newMessage);
            state.newPostsText = "";
            return state
        }
        case "UPDATE-NEW-TEXT": {
            state.newPostsText = action.newText;
            return state
        }
        default :return state
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