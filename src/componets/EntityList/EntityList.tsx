import React, { useState } from 'react';
import { DataGrid } from '../DataGrid';
import {
  DataGridColumnClkCb,
  DataGridRowActionBtnClkCb,
  DataGridSortAscType,
} from '../DataGrid/types';
import { DataSearch } from '../DataSearch';
import { DataSearchCb } from '../DataSearch/types';
import { EntityListProps, Items } from './types';
import { sortHelper } from './helpers';

export const EntityList: React.FC<EntityListProps> = ({
  items,
  visibleFields,
  setItems,
  addItemCb,
}) => {
  const [searchStr, setSearchStr] = useState<string>('');
  const [sortField, setSortField] = useState('id');
  const [sortAsc, setSortAsc] = useState<DataGridSortAscType>(1);

  const itemsFilter = (items: Items) => {
    const result = items.sort(sortHelper(sortField));
    if (sortAsc === 0) {
      return result.reverse();
    }
    return result;
  };

  const columnClkCb: DataGridColumnClkCb = (fieldName: string) => {
    if (fieldName === sortField) {
      if (sortAsc === 1) {
        setSortAsc(0);
      } else {
        setSortAsc(1);
      }
      return;
    }
    setSortAsc(1);
    setSortField(fieldName);
  };

  const actionCb: DataGridRowActionBtnClkCb = ({ id, type }) => {
    if (type === 'delete') {
      const result = items.filter((item) => item.id !== id);
      setItems(result);
    }
  };

  const searchCb: DataSearchCb = (searchValue: string) => {
    setSearchStr(searchValue);
  };

  const itemsRender =
    items.length > 0 ? (
      <DataGrid
        items={itemsFilter(items)}
        currentPage={1}
        perPage={1}
        visibleFields={visibleFields}
        findStr={searchStr}
        actionCb={actionCb}
        columnClkCb={columnClkCb}
        sortField={sortField}
        sortAsc={sortAsc}
        showSelectAction={false}
        showDeleteAction={true}
        showEditAction={false}
      />
    ) : (
      <div>
        Продукт не входит не в одну из категорий, для добавления нажмите кнопку
        добавить
      </div>
    );

  const dataSearchRender = (
    <DataSearch searchCb={searchCb} findStr={searchStr} isLoading={false} />
  );

  return (
    <div>
      <div className="">
        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={addItemCb}
        >
          Добавить
        </button>
      </div>
      <div className="mt-2">{dataSearchRender}</div>
      <div className="mt-3">{itemsRender}</div>
    </div>
  );
};
