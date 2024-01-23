import {authApi, securityApi} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {getAuthUserData, getProfileDataTC} from "./users-reducer";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

type AuthReducerType = ReturnType<typeof setUserDataAC> | ReturnType<typeof getCaptchaUrlAC> | ReturnType<typeof clearUserDataAC>
export type AuthDataType = {
    data: DataType
    isAuth: boolean
    captchaUrl: string | null
}
type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

const initialState: AuthDataType = {
    data: {
        id: null,
        email: null,
        login: null

    },
    isAuth: false,
    captchaUrl: null
}


export const authReducer = (state: AuthDataType = initialState, action: AuthReducerType): AuthDataType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA": {
            return {...state, ...action.data,
                isAuth: action.isAuth}
        }
        case "AUTH/SET-CAPTCHA": {
            return {...state, captchaUrl: action.captcha}
        }
        case "AUTH/CLEAR-USER-DATA":{
            console.log("authReducer")
            return {...action.data}
        }
        default :
            return {...state}
    }
}

export const setUserDataAC = (data: AuthDataType,isAuth:boolean) => {
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

export const clearUserDataAC=(data: AuthDataType)=>{
    return{
        type: "AUTH/CLEAR-USER-DATA",
        data
    } as const
}

export const loginUserTC = (data: FormDataType) => async (dispatch: AppThunkDispatch) => {
    try {
        const response = await authApi.loginUser(data)
        if (response.data.resultCode === 0) {
            localStorage.setItem('userId', String(response.data.data.userId));
            await dispatch(getAuthUserData())
            await dispatch(getProfileDataTC(response.data.data.userId))
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
         await authApi.logout()
            .then(()=>{
                dispatch(clearUserDataAC({
                    data: {
                        id: null,
                        email: null,
                        login: null

                    },
                    isAuth: false,
                    captchaUrl: null
                }))
            })
        localStorage.removeItem("userId")
    } catch (e) {
        alert(e)
    }
}
