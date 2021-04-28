import {
  DataGridColumnClkCb,
  DataGridRowActionBtnClkCb,
  DataGridVisibleField,
} from '../DataGrid/types';
import {
  DataPaginatorChangePerPageCb,
  DataPaginatorGoToPageBtnClkCb,
} from '../DataPaginator/types';
import { DataSearchCb, DataSearchUpdateBtnClkCb } from '../DataSearch/types';

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
  changePerPageCb: DataTableChangePerPageCb;
  addBtnClkCb: DataTableAddBtnClkCb;
}

export interface DataTableVisibleField extends DataGridVisibleField {}

export interface DataTableColumnClkCb extends DataGridColumnClkCb {}

export interface DataTableRowActionBtnClkCb extends DataGridRowActionBtnClkCb {}

export interface DataTableGoToPageBtnClkCb
  extends DataPaginatorGoToPageBtnClkCb {}

export interface DataTableUpdateBtnClkCb extends DataSearchUpdateBtnClkCb {}

export interface DataTableSearchCb extends DataSearchCb {}

export interface DataTableChangePerPageCb
  extends DataPaginatorChangePerPageCb {}

export interface DataTableAddBtnClkCb {
  (): void;
}
