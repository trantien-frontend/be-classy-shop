import {} from "react";
import { Pagination as PaginationType } from "../../../../types";

export interface PaginationProps {
  pagination: PaginationType | undefined;
  onClick: (page: number) => void;
}

export function Pagination({ pagination, onClick }: PaginationProps) {
  if (!pagination) return <></>;

  const {
    pageNumber: curentPage,
    pageSize: perPage,
    totalElements,
  } = pagination;

  if (
    perPage == undefined ||
    totalElements == undefined ||
    curentPage == undefined
  ) {
    return <></>;
  }

  const totalPages = Math.ceil(totalElements / perPage);
  console.log(totalPages);
  const handleChangePage = (page: number) => {
    onClick?.(page);
  };

  return (
    <div className="mt-10">
      <ul className="pagination flex justify-center gap-2 font-normal">
        {curentPage == 0 ? (
          <li className="w-8 h-8 border-[1px] cursor-not-allowed text-center text-color-primary bg-white  leading-8">{`<`}</li>
        ) : (
          <li
            onClick={() => handleChangePage(curentPage - 1)}
            className="w-8 h-8 border-[1px] cursor-pointer text-center text-white bg-color-primary leading-8"
          >{`<`}</li>
        )}
        {Array.from({ length: totalPages }, (v, i) => i).map((page) => {
          if (page == curentPage) {
            return (
              <li
                className="w-8 h-8 bg-main text-white border-[1px] text-center leading-8 cursor-pointer"
                key={page}
              >
                {page + 1}
              </li>
            );
          }
          return (
            <li
              className="w-8 h-8 border-[1px] bg-color-primary text-white text-center leading-8 cursor-pointer"
              key={page}
              onClick={() => handleChangePage(page)}
            >
              {page + 1}
            </li>
          );
        })}
        {curentPage == totalPages - 1 ? (
          <li className="w-8 h-8 border-[1px] cursor-not-allowed text-center text-color-primary bg-white leading-8">{`>`}</li>
        ) : (
          <li
            className="w-8 h-8 border-[1px] cursor-pointer text-center text-white bg-color-primary leading-8"
            onClick={() => handleChangePage(curentPage + 1)}
          >{`>`}</li>
        )}
      </ul>
    </div>
  );
}
