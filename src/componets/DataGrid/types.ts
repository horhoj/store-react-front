export interface DataGridProps {
  visibleFields: DataGridVisibleField[];
  sortField: string;
  items: any[] | undefined;
  sortAsc: DataGridSortAscType;
  columnClkCb: DataGridColumnClkCb;
  perPage: number | undefined;
  currentPage: number | undefined;
  actionCb: DataGridRowActionBtnClkCb;
  showEditAction: boolean;
  showDeleteAction: boolean;
  showSelectAction: boolean;
  findStr: string;
}

export interface DataGridVisibleField {
  name: string;
  title: string;
}

export interface DataGridColumnClkCb {
  (fieldName: string): void;
}

export type DataGridSortAscType = 1 | 0;

export interface DataGridRowActionBtnClkCb {
  (params: { id: number; type: 'select' | 'edit' | 'delete'; data: any }): void;
}
