import axios from "axios";

const instance = axios.create({
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {
            "API-KEY": "05ded78c-1af5-47a8-9e58-4fefeb749215"
        },
    }
)

export const usersAPI = {
    getUsers(numberPage: number, pageSize: number) {
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}
export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}
export const profileApi = {
    getProfile(userId: string | undefined) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string | undefined){
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus<ResponseType>(status: string|null){
        return instance.put(`profile/status`, {status})
    }
}

export const loginApi = {
   loginUser(data:LoginUserRequestType){
       console.log(data)
       return instance.post<ResponseType<{userId: number}>>("/auth/login", {data})
   }
}

export type LoginUserRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?:string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
type RequestType = {
    userId:string
}
type GetUsersResponseType ={
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: object
    small: string
    large: string

}