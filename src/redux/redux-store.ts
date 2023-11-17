import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduser} from "./profile-reduser";
import {dialogsReducer} from "./diallogs-reduser";
import {friendsReducer} from "./friends-reduser";
import {usersReduser} from "./users-reduser";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunk, {ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";




const rootReducer = combineReducers({
    app:appReducer,
    profile: profileReduser,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReduser,
    auth:authReducer,
    form:formReducer,

})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const store = createStore(rootReducer,applyMiddleware(thunk));
// export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>


// @ts-ignore
window.store = store;