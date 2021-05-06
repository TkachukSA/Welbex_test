import React, {ChangeEvent, useCallback, useState} from "react";
import {findValueAC, sortTableAC, tableReducer} from "../../bll/reducer";
import {ResponseTableType} from "../../api/bd-api";
import s from './FilterTable.module.css'

type FilterTablePropsType = {
    filter: "count" | "name" | "distance",
    setData: any,
    initialState: ResponseTableType[]
}

export const FilterTable: React.FC<FilterTablePropsType> = React.memo(  ({
                                                                setData,
                                                                initialState,
                                                                filter
}) => {
    let [value, setValue] = useState('')


    const sortUp = useCallback( () => setData(tableReducer(initialState, sortTableAC("up", filter))),[])
    const sortDown = useCallback( () => setData(tableReducer(initialState, sortTableAC("down", filter))),[])
    const findValue = useCallback( () => setData(tableReducer(initialState, findValueAC(value, filter))),[])


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <div>
                <button onClick={sortUp}>up</button>
                <button onClick={sortDown}>down</button>
                <input className={s.input} value={value} onChange={onChangeValue}/>
                <button onClick={findValue}>find</button>
            </div>
        </div>
    )
})