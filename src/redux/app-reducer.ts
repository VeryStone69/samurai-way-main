import {getAuthUserData} from "./users-reduser";
import {AppThunkDispatch} from "./redux-store";


type IniinitialStateAppType = {
    initialized:boolean
}

let initialState:IniinitialStateAppType = {
    initialized: false
}

export const appReducer = (state: IniinitialStateAppType = initialState, action: AppReducerType): IniinitialStateAppType => {
    switch (action.type) {
        case "APP/SET-INITIALIZED-SUCCESS": {
            return {...state, initialized:true}

        }
        default :
            return {...state}
    }
}

export const initializedSuccess = () => {
    return {
        type: "APP/SET-INITIALIZED-SUCCESS" as const
    }
}

export const initializeAppTC=()=> (dispatch:AppThunkDispatch)=>{
    let promise = dispatch(getAuthUserData());
    promise.then(()=>{
        dispatch(initializedSuccess())
    })
}

type AppReducerType = ReturnType<typeof initializedSuccess>