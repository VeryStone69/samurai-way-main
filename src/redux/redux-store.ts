import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./diallogs-reduser";
import {friendsReduser} from "./friends-reduser";
import {usersReduser} from "./users-reduser";
import {authReduser} from "./auth-reduser";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser,
    friends: friendsReduser,
    usersPage: usersReduser,
    auth:authReduser
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunk));
