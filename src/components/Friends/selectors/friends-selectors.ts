import {AppRootStateType} from "../../../redux/redux-store";

export const friendsSelector = ((state:AppRootStateType) => state.friends.items);