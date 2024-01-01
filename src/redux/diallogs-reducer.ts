import {DialogsDataType, MessagesDataType} from "../App";
import {v1} from "uuid";


export type DialogsReducerType = ReturnType<typeof addNewMessageAC>

export type DialogsPage = {
    dialogs: DialogsDataType[]
    message: MessagesDataType[]
}

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
}

export const dialogsReducer = (state: DialogsPage = initialState, action: DialogsReducerType): DialogsPage => {
    switch (action.type) {
        case "DIALOGS/ADD-NEW-MESSAGE": {
            const newMessage = {id: v1(), message: action.newMessageBody};
            return {...state, message: [...state.message, newMessage]}
        }
        default :
            return {...state}
    }
}


export const addNewMessageAC = (newMessageBody:string) => {
    return {
        type: "DIALOGS/ADD-NEW-MESSAGE",
        newMessageBody
    } as const
}