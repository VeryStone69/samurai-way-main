import {AppRootStateType} from "../../../redux/redux-store";

export const usersSelector = ((state:AppRootStateType) => state.usersPage.items)
export const pageSizeSelector = ((state:AppRootStateType) => state.usersPage);
export const fetchSelector = ((state:AppRootStateType) => state.usersPage);
export const toggleFollowingSelector = ((state:AppRootStateType) => state.usersPage.followingInProgress);