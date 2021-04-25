export interface DataGridProps {
  visibleFields: DataGridVisibleField[];
  sortField: string;
  items: any[] | undefined;
  sortAsc: 1 | 0;
  columnClkCb: DataGridColumnClkCb;
  perPage: number | undefined;
  currentPage: number | undefined;
  actionCb: DataGridRowActionBtnClkCb;
}

export interface DataGridVisibleField {
  name: string;
  title: string;
}

export interface DataGridColumnClkCb {
  (fieldName: string): void;
}

export interface DataGridRowActionBtnClkCb {
  (params: { id: number; type: 'edit' | 'delete' }): void;
}
