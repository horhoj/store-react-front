export interface DataTableProps {
  items: any[] | undefined;
  visibleFields: DataTableVisibleField[];
  isLoading: boolean;
  columnClkCb: DataTableColumnClkCb;
  sortField: string;
  sortAsc: 1 | 0;
}

export interface DataTableVisibleField {
  name: string;
  title: string;
}

export interface DataTableColumnClkCb {
  (fieldName: string): void;
}
