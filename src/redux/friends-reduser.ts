import {v1} from "uuid";

export type FriendsDataType = {
    id: string
    name: string
    img: string
}

const initialState: FriendsDataType[] = [
    {
        id: v1(),
        name: "Jonh",
        // img: "https://9obzor.ru/wp-content/uploads/2023/02/obrabotka-foto-neyroseti11.jpg"
        img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
    },
    {
        id: v1(),
        name: "Lily",
        img: "https://w7.pngwing.com/pngs/224/408/png-transparent-avatar-child-girl-kid-avatars-xmas-giveaway-icon.png"
    },
    {
        id: v1(),
        name: "James",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQ6JaRiKfz-Y1c61i5WpAYWtS0gV5ab91p6kSLmW9msq8hDehPmGrp97yvS97NYK2WpA&usqp=CAU"
    },
    {
        id: v1(),
        name: "Robert",
        img: "https://it-tehnik.ru/wp-content/uploads/matureman.png"
    },
    {
        id: v1(),
        name: "William",
        img: "https://72tv.ru/uploads/posts/2022-09/1662876293_avatarka-foto-288.jpg"
    },
]

export const friendsReducer = (state: FriendsDataType[] = initialState, action: any): FriendsDataType[] => {
    return [...state]
}
