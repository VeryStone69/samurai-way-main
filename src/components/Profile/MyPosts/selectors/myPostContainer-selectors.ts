import {AppRootStateType} from "../../../../redux/redux-store";

export const profileSelector = ((state:AppRootStateType) => state.profile);