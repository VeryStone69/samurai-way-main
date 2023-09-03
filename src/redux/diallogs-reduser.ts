import {DialogsPage} from "../App";
import {v1} from "uuid";

type AddNewMessageActionType = ReturnType<typeof addNewMessageAC>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export type DialogsReduserType = AddNewMessageActionType | UpdateNewMessageActionType

const initialState: DialogsPage = {
    dialogs: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Poma"},
        {id: v1(), name: "Pasha"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Andrey"},],
    message: [
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Hi"},
        {id: v1(), message: "I am fine and you?"},
        {id: v1(), message: "Fine!"},
        {id: v1(), message: "Maybe drink vodka?"},
        {id: v1(), message: "Good idea!"},
    ],
    newMessage: "",
}

export const dialogsReduser = (state:DialogsPage=initialState,action: DialogsReduserType):DialogsPage =>{
    switch (action.type){
        case "ADD-NEW-MESSAGE":{
            const newMessage = {id: v1(), message: state.newMessage};
            state.message.push(newMessage)
            state.newMessage = "";
            return state
        }
        case "UPDATE-NEW-MESSAGE": {
            state.newMessage = action.newMessageText;
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