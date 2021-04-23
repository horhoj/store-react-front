export interface DataPaginatorProps {
  lastPage: number | undefined;
  currentPage: number | undefined;
  goToPageBtnClkCb: DataPaginatorGoToPageBtnClkCb;
  perPage: number;
  changePerPageCb: DataPaginatorChangePerPageCb;
}

export interface DataPaginatorGoToPageBtnClkCb {
  (page: number): void;
}

export interface DataPaginatorChangePerPageCb {
  (perPage: number): void;
}
