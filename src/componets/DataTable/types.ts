export interface DataTableProps {
  items: any[] | undefined;
  visibleFields: DataTableVisibleField[];
  isLoading: boolean;
  columnClkCb: DataTableColumnClkCb;
  sortField: string;
  sortAsc: 1 | 0;
  actionCb: DataTableRowActionBtnClkCb;
  lastPage: number | undefined;
  currentPage: number | undefined;
  goToPageBtnClkCb: DataTableGoToPageBtnClkCb;
  perPage: number | undefined;
  updateBtnClkCb: DataTableUpdateBtnClkCb;
  searchCb: DataTableSearchCb;
  findStr: string;
}

export interface DataTableVisibleField {
  name: string;
  title: string;
}

export interface DataTableColumnClkCb {
  (fieldName: string): void;
}

export interface DataTableRowActionBtnClkCb {
  (params: { id: number; type: 'edit' | 'view' | 'delete' }): void;
}

export interface DataTableGoToPageBtnClkCb {
  (page: number): void;
}

export interface DataTableUpdateBtnClkCb {
  (): void;
}

export interface DataTableSearchCb {
  (findStr: string): void;
}
