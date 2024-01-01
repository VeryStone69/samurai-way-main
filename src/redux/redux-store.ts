import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./diallogs-reducer";
import {friendsReducer} from "./friends-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunk, {ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";




const rootReducer = combineReducers({
    app:appReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,

})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const store = createStore(rootReducer,applyMiddleware(thunk));
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>


// @ts-ignore
window.store = store;