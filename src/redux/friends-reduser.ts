import {v1} from "uuid";

export type FriendsDataType = {
    id: string
    name: string
    img: string
}

const initialState: FriendsDataType[] = [
    {
        id: v1(),
        name: "Leonora",
        img: "https://9obzor.ru/wp-content/uploads/2023/02/obrabotka-foto-neyroseti11.jpg"
    },
    {
        id: v1(),
        name: "Meteora",
        img: "https://static-cdn4-2.vigbo.tech/u19297/22269/blog/4426958/5938479/78187796/1000-Ekaterina_Nasyrova-961e3efa6072f7f8083602f199712ff8.JPG"
    },
    {
        id: v1(),
        name: "Foress",
        img: "https://www.business2community.com/ru/wp-content/uploads/sites/12/2023/05/generator.png"
    },
    {
        id: v1(),
        name: "Tramp",
        img: "https://cs13.pikabu.ru/images/big_size_comm/2023-02_4/1676600230192459959.jpg"
    },
    {
        id: v1(),
        name: "Prince",
        img: "https://cs14.pikabu.ru/images/big_size_comm/2023-02_4/1676612896111680941.jpg"
    },
]

export const friendsReduser = (state: FriendsDataType[] = initialState, action: any): FriendsDataType[] => {
    return [...state]
}
