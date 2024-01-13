import {authApi, securityApi} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {getAuthUserData} from "./users-reducer";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

type AuthReducerType = ReturnType<typeof setUserDataAC> | ReturnType<typeof getCaptchaUrlAC>
export type AuthDataType = {
    resultCode?: number
    messages?: string[],
    data: DataType
    isFetching?: boolean
    isAuth: boolean
    captchaUrl: string | null
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
    isAuth: false,
    captchaUrl: null
}


export const authReducer = (state: AuthDataType = initialState, action: AuthReducerType): AuthDataType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA": {
            return {...state, ...action.data, isFetching: false, isAuth: action.isAuth}
        }
        case "AUTH/SET-CAPTCHA": {
            return {...state, captchaUrl: action.captcha}
        }
        default :
            return {...state}
    }
}

export const setUserDataAC = (data: AuthDataType, isAuth: boolean) => {
    return {
        type: "AUTH/SET-USER-DATA" as const,
        data,
        isAuth
    }
}
export const getCaptchaUrlAC = (captcha: string | null) => {
    return {
        type: "AUTH/SET-CAPTCHA" as const,
        captcha
    }
}

export const loginUserTC = (data: FormDataType) => async (dispatch: AppThunkDispatch) => {
    try {
        const response = await authApi.loginUser(data)
        if (response.data.resultCode === 0) {
            await dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                await dispatch(getCaptchaUrlTC())
            }
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
        }
    } catch (e) {
        alert(e)
    }
}

export const getCaptchaUrlTC = () => async (dispatch: AppThunkDispatch) => {
    try {
        const response = await securityApi.getCaptcha()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlAC(captchaUrl))
    } catch (e) {
    }

}


export const logoutUserTC = () => async (dispatch: AppThunkDispatch) => {
    try {
        const response = await authApi.logout()
        if (response.status === 0) {
            dispatch(setUserDataAC({
                data: {id: null, email: null, login: null},
                isAuth: false,
                captchaUrl: null
            }, false))
        } else {
            console.log(response.status)
        }
    } catch (e) {
        alert(e)
    }
}
