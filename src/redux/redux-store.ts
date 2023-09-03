import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./diallogs-reduser";
import {friendsReduser} from "./friends-reduser";



const rootReducer = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser,
    friends: friendsReduser
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);