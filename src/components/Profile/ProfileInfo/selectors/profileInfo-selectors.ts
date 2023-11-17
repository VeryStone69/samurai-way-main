import {AppRootStateType} from "../../../../redux/redux-store";

export const profileStatusSelector = ((state:AppRootStateType) => state.profile.status);