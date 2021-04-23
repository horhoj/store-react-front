export interface DataPaginatorProps {
  lastPage: number | undefined;
  currentPage: number | undefined;
  goToPageBtnClkCb: DataPaginatorGoToPageBtnClkCb;
}

export interface DataPaginatorGoToPageBtnClkCb {
  (page: number): void;
}
