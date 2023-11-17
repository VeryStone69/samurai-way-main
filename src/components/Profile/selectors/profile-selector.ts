import {AppRootStateType} from "../../../redux/redux-store";

export const profileDataSelector = ((state:AppRootStateType) => state.profile);