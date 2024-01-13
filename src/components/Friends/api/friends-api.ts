import {instance} from "../../../api/api";

export const friendsApi = {
    getFriends(numberPage: number, pageSize: number) {
        return instance.get(`users?page=${numberPage}&count=${pageSize}&friend=${true}`)
            .then(res => res.data)
    },
}