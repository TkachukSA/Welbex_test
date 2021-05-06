import React, {useState} from "react";
import s from './Table.module.css'
import {ResponseTableType} from "../api/bd-api";
import {FilterTable} from "../common/filtration/FilterTable";
import {FormTabsSelect} from "../common/formTabsSelect/FormTabsSelect";
import {Paginator} from "../common/pagination/Pagination";


type TableType = {
    table: ResponseTableType[],
    initialState: ResponseTableType[],
    setData: any
}

export const Table: React.FC<TableType> = React.memo(({table, initialState, setData}) => {
    const [currentPage, setCurrentPage] = useState(1)

    function DisplayList(items: any, rowsPage: number, page: number) {
        page--
        let start = rowsPage * page
        let end = start + rowsPage
        let paginatedItems = items.slice(start, end)
        let item = []
        for (let i = 0; i < paginatedItems.length; i++) {
            let items = paginatedItems[i]
            item.push(items)
        }
        return item
    }


    let sortItems = DisplayList(table, 10, currentPage)

    return (
        <div className={s.tableContainer}>
            <div className={s.container}>
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th><FormTabsSelect title={'name'}
                                            description={
                                                <FilterTable filter={"name"}
                                                             initialState={initialState}
                                                             setData={setData}/>
                                            }/></th>
                        <th>
                            <FormTabsSelect title={'count'}
                                            description={
                                                <div>
                                                    <FilterTable filter={"count"}
                                                                 initialState={initialState}
                                                                 setData={setData}/>
                                                </div>
                                            }/>
                        </th>
                        <th>
                            <FormTabsSelect title={'distance'}
                                            description={
                                                <div>
                                                    <FilterTable filter={"distance"}
                                                                 initialState={initialState}
                                                                 setData={setData}/>
                                                </div>
                                            }/>
                        </th>
                        <th>date</th>
                    </tr>
                    </thead>
                    {
                        sortItems && sortItems.map((t) =>
                            <tbody key={t.id}>
                            <tr key={t.id}>
                                <td>{t.name}</td>
                                <td>{t.count}</td>
                                <td>{t.distance}</td>
                                <td>{new Date(t.date).toLocaleDateString()}</td>
                            </tr>
                            </tbody>
                        )}
                </table>
            </div>
            <div>
                <Paginator rowsPage={10}
                           items={initialState}
                           currentPage={currentPage}
                           setCurrentPage={setCurrentPage}/>

            </div>
        </div>
    );
})

