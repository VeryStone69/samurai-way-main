import {PostDataType, StateType} from "../App";
import {v1} from "uuid";

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewTextActionType = ReturnType<typeof updateNewPostAC>

export type ProfileReduserType = AddPostActionType|UpdateNewTextActionType

export const profileReduser = (state:StateType,action: ProfileReduserType) =>{
    switch (action.type){
        case "ADD-POST":{
            let newMessage: PostDataType = {id: v1(), message: state.profile.newPostsText, likesCount: 0};
            state.profile.posts.unshift(newMessage);
            state.profile.newPostsText = "";
            return state
        }
        case "UPDATE-NEW-TEXT": {
            state.profile.newPostsText = action.newText;
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