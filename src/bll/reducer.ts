import {ResponseTableType} from "../bd-api";


export const sortTableAC =(payload: "up" | "down", filter: "count" | "name" | "distance" )=> ({ type: "SORT_TABLE", payload, filter } as const )
export const sortName18plusAC = ()=>({ type: "check", payload: 18 } as const)
export const findValueAC = (find: string, filter: "count" | "name" | "distance") => ({type: 'FIND_VALUE', find, filter} as const)


export type ActionsType =
    | ReturnType<typeof sortTableAC>
    | ReturnType<typeof sortName18plusAC>
    | ReturnType<typeof findValueAC>


export const tableReducer = (state: ResponseTableType[], action: ActionsType): ResponseTableType[] => {
    switch (action.type) {
        case "SORT_TABLE": {
            if (action.payload == "up") {
                if (action.filter === "name") {
                    return [...state.sort(function (a, b) {
                        if (a[action.filter] < b[action.filter]) {
                            return -1;
                        }
                        if (a[action.filter] > b[action.filter]) {
                            return 1;
                        }
                        return 0;
                    })]
                } else {
                    return [...state.sort(function (a, b) {
                        if (+a[action.filter] < +b[action.filter]) {
                            return -1;
                        }
                        if (+a[action.filter] > +b[action.filter]) {
                            return 1;
                        }
                        return 0;
                    })]
                }
            }
            if (action.payload === "down") {
                if (action.filter === "name") {
                    return [...state.sort(function (a, b) {
                        if (a[action.filter] > b[action.filter]) {
                            return -1;
                        }
                        if (a[action.filter] < b[action.filter]) {
                            return 1;
                        }
                        return 0;
                    })]
                } else {
                    return [...state.sort(function (a, b) {
                        if (+a[action.filter] > +b[action.filter]) {
                            return -1;
                        }
                        if (+a[action.filter] < +b[action.filter]) {
                            return 1;
                        }
                        return 0;
                    })]

                }
            }
            return {...state}
        }
        case "check": {
            const newState = [...state]
            return newState.filter(t => t.count < 180)
        }
        case "FIND_VALUE": {
            const newState = [...state]
            return newState.filter(t => t[action.filter].toString().toLowerCase().indexOf(action.find.toString().toLowerCase()) > -1)
        }
        default:
            return state
    }
};