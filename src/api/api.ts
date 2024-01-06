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
    },
    loginUser(data: LoginUserRequestType) {
        return instance.post<ResponseType<{ userId: number }>>("/auth/login", data)
    },
    logout() {
        return instance.delete<ResponseType>("/auth/login")
    }
}
export const profileApi = {
    getProfile(userId: string | undefined) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string | undefined) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus<ResponseType>(status: string | null) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveUserProfileChanges(userData:SaveUserProfileChangesType) {
        return instance.put("profile",userData)
    }
}


export type LoginUserRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type SaveUserProfileChangesType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
