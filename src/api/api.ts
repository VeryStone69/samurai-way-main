import axios from "axios";

const instance = axios.create({
        baseURL:"https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {
            "API-KEY": "6357bf2d-3ba6-4559-b8ec-ed1b7bec63a8"
        },
    }
)

export const usersAPI = {
    getUsers (numberPage:number,pageSize:number){
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
            .then(res=>res.data)
    },
    followUser(userId:number){
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId:number){
        return instance.delete(`follow/${userId}`)
    }
}

