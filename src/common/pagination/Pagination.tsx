import React from "react";
import s from './Pagination.module.css'
import {ResponseTableType} from "../../api/bd-api";

type PaginationPropsType = {
    rowsPage: number
    items: ResponseTableType[]
    currentPage: number
    setCurrentPage: any

}
export const Paginator: React.FC<PaginationPropsType> = React.memo( ({
                                                             items, rowsPage,
                                                             setCurrentPage, currentPage
                                                         }) => {
    let pagesCount = Math.ceil(items.length / rowsPage);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.main}>
            {
                pages.map((t, i) => <div className={t === currentPage ? s.currentNum : s.num}
                    key={i}
                    onClick={() => {setCurrentPage(t)}}>
                    {t}
                </div>)
            }
        </div>
    )
})