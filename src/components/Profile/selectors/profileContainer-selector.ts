import {AppRootStateType} from "../../../redux/redux-store";

export const isAuthSelector = ((state:AppRootStateType) => state.auth.isAuth);