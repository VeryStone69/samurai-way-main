import {Dispatch} from "redux";
import {loginApi} from "../api/api";
import {FormDataType} from "../components/Login/Login";

type AuthReducerType = ReturnType<typeof setUserDataAC>
export type AuthDataType = {
    resultCode: number
    messages: [],
    data: {
        id: number|null
        email: string|null
        login: string|null
    }
    isFetching?: boolean
    isAuth: boolean
}

const initialState: AuthDataType = {
    resultCode: 0,
    messages: [],
        data: {
    id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'

},
    isFetching: true,
    isAuth: false
}


export const authReducer = (state: AuthDataType = initialState, action: AuthReducerType): AuthDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...action.data, isFetching:false, isAuth:true}

        }
        default :
            return {...state}
    }
}

export const setUserDataAC = (data:AuthDataType) => {
    return {
        type: "SET-USER-DATA" as const,
        data
    }
}

export const loginUserTC = (data:FormDataType) => async (dispatch:Dispatch)=>{
    try {
        const result = await loginApi.loginUser(data)
            .then(result=>{
                console.log(result)
            })

    } catch (e) {
       alert(e)
    }
}