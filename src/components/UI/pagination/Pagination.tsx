import { usePagination } from "../../../hooks/usePagination"


interface Props {
    page: number;
    totalPages: number;
    changePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({page, totalPages, changePage}) => {

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