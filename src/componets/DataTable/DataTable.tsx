import React from 'react';
import { Spinner } from '../Spinner';
import { DataPaginator } from '../DataPaginator';
import { DataSearch } from '../DataSearch';
import { DataGrid } from '../DataGrid';
import { DataTableProps } from './types';

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
  showEditAction,
  showDeleteAction,
  showSelectAction,
  showAddAction,
}) => {
  return (
    <div className="w-100 position-relative app__transition-opacity">
      {isLoading ? <Spinner /> : ''}
      {items && visibleFields ? (
        <fieldset disabled={isLoading}>
          <div className="mb-3">
            {showAddAction ? (
              <button
                className="btn btn-primary mr-2"
                onClick={addBtnClkCb}
                type="button"
              >
                Добавить
              </button>
            ) : null}
            <button
              className="btn btn-primary"
              onClick={updateBtnClkCb}
              type="button"
            >
              Обновить
            </button>
          </div>
          <DataSearch
            searchCb={searchCb}
            findStr={findStr}
            isLoading={isLoading}
          />
          <div className="mt-3">
            <DataGrid
              items={items}
              currentPage={currentPage}
              perPage={perPage}
              sortField={sortField}
              sortAsc={sortAsc}
              actionCb={actionCb}
              columnClkCb={columnClkCb}
              visibleFields={visibleFields}
              findStr={findStr}
              showSelectAction={showSelectAction}
              showDeleteAction={showDeleteAction}
              showEditAction={showEditAction}
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
