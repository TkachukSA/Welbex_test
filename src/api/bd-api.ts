import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3010/',
})
export type ResponseTableType = {
    count: number
    date: Date
    distance: string
    id: number
    name: string

}
export const mySqlAPI = {
    getTable() {
        return instance.get<ResponseTableType[]>('test')
    },
}