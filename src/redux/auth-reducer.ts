import {authApi} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {getAuthUserData} from "./users-reducer";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

type AuthReducerType = ReturnType<typeof setUserDataAC>
export type AuthDataType = {
    resultCode?: number
    messages?: string[],
    data: DataType
    isFetching?: boolean
    isAuth: boolean
}
type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

const initialState: AuthDataType = {
    resultCode: 0,
    messages: [],
    data: {
        id: 2,
        email: null,
        login: null

    },
    isFetching: true,
    isAuth: false
}


export const authReducer = (state: AuthDataType = initialState, action: AuthReducerType): AuthDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.data, isFetching: false, isAuth: action.isAuth}

        }
        default :
            return {...state}
    }
}

export const setUserDataAC = (data: AuthDataType, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA" as const,
        data,
        isAuth
    }
}

export const loginUserTC = (data: FormDataType) => async (dispatch: AppThunkDispatch) => {
    try {
        await authApi.loginUser(data)
            .then(result => {
                // dispatch(getAuthUserData())
                if (result.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    dispatch(stopSubmit("login", {_error: result.data.messages[0]}))
                }
            })


    } catch (e) {
        alert(e)
    }
}

export const logoutUserTC = () => async (dispatch: AppThunkDispatch) => {
    try {
        await authApi.logout()
            .then(result => {
                if (result.status === 0) {
                    dispatch(setUserDataAC({data: {id: null, email: null, login: null}, isAuth: false}, false))
                } else {
                    console.log(result.status)
                }

            })

    } catch (e) {
        alert(e)
    }
}
