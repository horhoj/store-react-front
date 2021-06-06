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
import { searchFilter, sortHelper } from './helpers';

export const EntityList: React.FC<EntityListProps> = ({
  items,
  visibleFields,
  setItems,
  addItemCb,
}) => {
  const [searchStr, setSearchStr] = useState<string>('');
  const [sortField, setSortField] = useState('id');
  const [sortAsc, setSortAsc] = useState<DataGridSortAscType>(1);

  const fieldNames: string[] = visibleFields.map((field) => field.name);

  const itemsFilter = (items: Items) => {
    const foundItems =
      searchStr.trim().length > 0
        ? searchFilter(items, searchStr, fieldNames)
        : items;
    const result = foundItems.sort(sortHelper(sortField));
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
          className="btn btn-sm btn-primary mt-3 app__btn-min-width"
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
