import {StateType} from "../App";
import {v1} from "uuid";

type AddNewMessageActionType = ReturnType<typeof addNewMessageAC>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export type DialogsReduserType = AddNewMessageActionType | UpdateNewMessageActionType

export const dialogsReduser = (state:StateType,action: DialogsReduserType) =>{
    switch (action.type){
        case "ADD-NEW-MESSAGE":{
            const newMessage = {id: v1(), message: state.dialogsPage.newMessage};
            state.dialogsPage.message.push(newMessage)
            state.dialogsPage.newMessage = "";
            return state
        }
        case "UPDATE-NEW-MESSAGE": {
            state.dialogsPage.newMessage = action.newMessageText;
            return state
        }
        default :return state
    }
}


export const addNewMessageAC = () => {
    return {
        type: "ADD-NEW-MESSAGE"
    } as const
}
export const updateNewMessageAC = (newMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newMessageText
    } as const
}