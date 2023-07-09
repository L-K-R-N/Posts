import { useState } from "react"
import { usePagination } from "../../../hooks/usePagination"

export const Pagination = ({page, totalPages, changePage}) => {

    let pagesArray = usePagination(totalPages)
    return (
        <div className="page__wrapper">
          {pagesArray.map(p => 

            <span 
            onClick={() => changePage(p)}
            key={p}
            
            className={p === page ? 'page page__current' : 'page'}
            >
                {p}
            </span>
            )}
        </div>
    )
}