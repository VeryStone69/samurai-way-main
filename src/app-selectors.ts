import {AppRootStateType} from "./redux/redux-store";

export const initializedSelector = ((state:AppRootStateType) => state.app.initialized);
