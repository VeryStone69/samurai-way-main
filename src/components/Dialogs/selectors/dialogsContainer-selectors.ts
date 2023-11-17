import {AppRootStateType} from "../../../redux/redux-store";

export const isAuthDialogsContainerSelector = ((state:AppRootStateType) => state.auth.isAuth);
export const dialogsSelector = ((state:AppRootStateType) => state.dialogs);