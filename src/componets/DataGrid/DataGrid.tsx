import React from 'react';
import { DataGridProps } from './types';
import styles from './styles.module.scss';

const ARRAY_UP = <>&uArr;</>;
const ARRAY_DOWN = <>&dArr;</>;

export const DataGrid: React.FC<DataGridProps> = ({
  visibleFields,
  sortField,
  items,
  sortAsc,
  columnClkCb,
  perPage = 0,
  currentPage = 0,
  actionCb,
  findStr,
}) => {
  const deleteActionHandle = (id: number) => {
    const result = window.confirm('Удалить?');
    if (result) {
      actionCb({ id, type: 'delete' });
    }
  };

  const highlightFindStr = (val: string) => {
    const regexp = new RegExp(findStr, 'ig');
    const matchValue = String(val).match(regexp);
    if (findStr !== '') {
      const c = matchValue ? matchValue.shift() : '';
      return String(val)
        .split(regexp)
        .map((item, index, array) => {
          return index < array.length - 1 ? (
            <span key={index}>
              {item}
              <span className="bg-warning">{c}</span>
            </span>
          ) : (
            item
          );
        });
    }
    return val;
  };

  return items && visibleFields ? (
    <div className="mt-3">
      <table className="table table-striped table-sm font-weight-normal">
        <thead>
          <tr>
            <th className="border bg-primary cur text-white text-center">
              <div className="btn text-white app__cursor-default app__line-height-1">
                №
              </div>
            </th>
            {visibleFields.map((field) => (
              <th
                className={`border app__cursor-pointer text-center  ${
                  field.name === sortField ? 'btn-info ' : 'btn-primary'
                }`}
                key={field.name}
              >
                <button
                  className="btn w-100 text-white app__line-height-1"
                  onClick={() => columnClkCb(field.name)}
                >
                  {field.title}&nbsp;
                  {field.name === sortField
                    ? sortAsc === 1
                      ? ARRAY_UP
                      : ARRAY_DOWN
                    : ''}
                </button>
              </th>
            ))}
            <th className="border bg-primary text-white text-center">
              <div className="btn  text-white app__cursor-default app__line-height-1 ">
                Действия
              </div>
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
                    {highlightFindStr(item[field.name])}
                  </div>
                </td>
              ))}
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <div className={styles.buttonsPanel}>
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => actionCb({ id: item.id, type: 'edit' })}
                    >
                      Изменить
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => deleteActionHandle(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};
