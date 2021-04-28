import React from 'react';
import { DataTableProps } from './types';
import { Spinner } from '../Spinner';
import { DataPaginator } from '../DataPaginator';
import { DataSearch } from '../DataSearch';
import { DataGrid } from '../DataGrid';

export const DataTable: React.FC<DataTableProps> = ({
  items,
  visibleFields,
  isLoading,
  columnClkCb,
  sortAsc,
  sortField,
  actionCb,
  lastPage = 0,
  currentPage = 0,
  goToPageBtnClkCb,
  perPage = 0,
  updateBtnClkCb,
  searchCb,
  findStr,
  changePerPageCb,
  addBtnClkCb,
}) => {
  return (
    <div
      className={`w-100 position-relative app__transition-opacity  ${
        isLoading ? 'app__disabled' : ''
      }`}
    >
      {isLoading ? <Spinner parentComponentCenterPosition={true} /> : ''}
      {items && visibleFields ? (
        <fieldset disabled={isLoading}>
          <div className="mb-3">
            <button className="btn btn-primary mr-2" onClick={addBtnClkCb}>
              Добавить
            </button>
            <button className="btn btn-primary" onClick={updateBtnClkCb}>
              Обновить
            </button>
          </div>

          <DataSearch
            searchCb={searchCb}
            findStr={findStr}
            isLoading={isLoading}
          />
          <div>
            <DataGrid
              items={items}
              currentPage={currentPage}
              perPage={perPage}
              sortField={sortField}
              sortAsc={sortAsc}
              actionCb={actionCb}
              columnClkCb={columnClkCb}
              visibleFields={visibleFields}
            />
          </div>
          <div>
            <DataPaginator
              lastPage={lastPage}
              goToPageBtnClkCb={goToPageBtnClkCb}
              currentPage={currentPage}
              perPage={perPage}
              changePerPageCb={changePerPageCb}
            />
          </div>
        </fieldset>
      ) : null}
    </div>
  );
};
