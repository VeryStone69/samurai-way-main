import {AppRootStateType} from "../../../redux/redux-store";

export const authorizedUserIdSelector = ((state:AppRootStateType) => state.profile.profile?.userId);
export const isAuthSelector = ((state:AppRootStateType) => state.auth.isAuth);