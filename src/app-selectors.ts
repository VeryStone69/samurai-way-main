import {AppRootStateType} from "./redux/redux-store";
import {createSelector} from "reselect";

export const initializedSelector = ((state:AppRootStateType) => state.app.initialized);
