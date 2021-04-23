import React from 'react';
import { DataPaginatorProps } from './types';

const FIRST_PAGE = <>&laquo;</>;
const PREV_PAGE = <>&lsaquo;</>;
const NEXT_PAGE = <>&rsaquo;</>;
const LAST_PAGE = <>&raquo;</>;

export const DataPaginator: React.FC<DataPaginatorProps> = ({
  lastPage,
  currentPage,
  goToPageBtnClkCb,
}) => {
  const goToFirstPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage > 1) {
        goToPageBtnClkCb(1);
      }
    }
  };

  const goToLastPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage < lastPage) {
        goToPageBtnClkCb(lastPage);
      }
    }
  };

  const goToPrevPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage > 1) {
        goToPageBtnClkCb(currentPage - 1);
      }
    }
  };

  const goToNextPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage < lastPage) {
        goToPageBtnClkCb(currentPage + 1);
      }
    }
  };
  return lastPage && currentPage ? (
    <div className="d-flex justify-content-center flex-column w-100 align-items-center">
      <div className="h5">
        {currentPage} : {lastPage}
      </div>
      <div className="mt-2">
        <button
          className="btn btn-primary mr-1"
          onClick={goToFirstPageBtnClkHandle}
        >
          {FIRST_PAGE}
        </button>
        <button
          className="btn btn-primary mr-1"
          onClick={goToPrevPageBtnClkHandle}
        >
          {PREV_PAGE}
        </button>

        <button
          className="btn btn-primary mr-1"
          onClick={goToNextPageBtnClkHandle}
        >
          {NEXT_PAGE}
        </button>
        <button
          className="btn btn-primary mr-1"
          onClick={goToLastPageBtnClkHandle}
        >
          {LAST_PAGE}
        </button>
      </div>
    </div>
  ) : null;
};
