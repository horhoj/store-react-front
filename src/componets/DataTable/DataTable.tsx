import React, { useEffect, useRef, useState } from 'react';
import { DataTableProps } from './types';
import { Spinner } from '../Spinner';
import styles from './styles.module.scss';
import { TimeoutID } from '../../types/system';

const ARRAY_UP = <>&uArr;</>;
const ARRAY_DOWN = <>&dArr;</>;
const FIRST_PAGE = <>&laquo;</>;
const PREV_PAGE = <>&lsaquo;</>;
const NEXT_PAGE = <>&rsaquo;</>;
const LAST_PAGE = <>&raquo;</>;
const INPUT_DELAY = 600;

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
}) => {
  const [findStrValue, setFindStrValue] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const intervalId: TimeoutID = setTimeout(() => {
      if (findStr !== findStrValue) {
        searchCb(findStrValue.trim());
      }
    }, INPUT_DELAY);
    return () => {
      clearInterval(intervalId);
    };
  }, [findStrValue]);

  useEffect(() => {
    if (!isLoading) {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }, [isLoading]);

  const findStrCLearBtnClkHandle = () => {
    if (findStrValue !== '') {
      setFindStrValue('');
      searchCb('');
    }
  };

  const goToFirstPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage > 1) {
        goToPageBtnClkCb(1);
      }
    }
  };

  const goToLastPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage < lastPage) {
        goToPageBtnClkCb(lastPage);
      }
    }
  };

  const goToPrevPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage > 1) {
        goToPageBtnClkCb(currentPage - 1);
      }
    }
  };

  const goToNextPageBtnClkHandle = () => {
    if (lastPage && currentPage) {
      if (currentPage < lastPage) {
        goToPageBtnClkCb(currentPage + 1);
      }
    }
  };

  return (
    <div
      className={`w-100 position-relative ${isLoading ? 'app__disabled' : ''}`}
    >
      {isLoading ? <Spinner parentComponentCenterPosition={true} /> : ''}
      {items && visibleFields ? (
        <fieldset disabled={isLoading}>
          <div className={styles.finder}>
            <button
              className="btn btn-primary btn-sm mr-2 ml-1"
              onClick={updateBtnClkCb}
            >
              Обновить
            </button>
            <input
              type="text"
              className="form-control"
              value={findStrValue}
              onChange={(e) => setFindStrValue(e.target.value)}
              ref={searchInputRef}
            />
            <button
              className="btn btn-primary btn-sm ml-2 mr-1"
              onClick={findStrCLearBtnClkHandle}
            >
              Очистить
            </button>
          </div>
          <div className="mt-3">
            <table className={`table table-striped table-sm `}>
              <thead>
                <tr>
                  <th className="border bg-primary text-white text-center">
                    №
                  </th>
                  {visibleFields.map((field) => (
                    <th
                      className={`border app__cursor-pointer text-center  ${
                        field.name === sortField ? 'btn-info' : 'btn-primary'
                      }`}
                      key={field.name}
                      onClick={() => columnClkCb(field.name)}
                    >
                      {field.title}&nbsp;
                      {field.name === sortField
                        ? sortAsc === 1
                          ? ARRAY_UP
                          : ARRAY_DOWN
                        : ''}
                    </th>
                  ))}
                  <th className="border bg-primary text-white text-center">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        {perPage * (currentPage - 1) + index + 1}
                      </div>
                    </td>
                    {visibleFields.map((field) => (
                      <td key={field.name}>
                        <div className="d-flex justify-content-center align-items-center">
                          {item[field.name]}
                        </div>
                      </td>
                    ))}
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-info btn-sm mr-1"
                          onClick={() =>
                            actionCb({ id: item.id, type: 'view' })
                          }
                        >
                          V
                        </button>
                        <button
                          className="btn btn-warning btn-sm mr-1"
                          onClick={() =>
                            actionCb({ id: item.id, type: 'edit' })
                          }
                        >
                          E
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            actionCb({ id: item.id, type: 'delete' })
                          }
                        >
                          D
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {lastPage && currentPage ? (
            <div className="d-flex justify-content-center flex-column w-100 align-items-center">
              <div className="h5">
                {currentPage} : {lastPage}
              </div>
              <div className="mt-2">
                <button
                  className="btn btn-primary mr-1"
                  onClick={goToFirstPageBtnClkHandle}
                >
                  {FIRST_PAGE}
                </button>
                <button
                  className="btn btn-primary mr-1"
                  onClick={goToPrevPageBtnClkHandle}
                >
                  {PREV_PAGE}
                </button>

                <button
                  className="btn btn-primary mr-1"
                  onClick={goToNextPageBtnClkHandle}
                >
                  {NEXT_PAGE}
                </button>
                <button
                  className="btn btn-primary mr-1"
                  onClick={goToLastPageBtnClkHandle}
                >
                  {LAST_PAGE}
                </button>
              </div>
            </div>
          ) : null}
        </fieldset>
      ) : null}
    </div>
  );
};
