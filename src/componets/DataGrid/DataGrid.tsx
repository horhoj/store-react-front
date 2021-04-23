import React from 'react';
import { DataGridProps } from './types';

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
}) => {
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
                    {item[field.name]}
                  </div>
                </td>
              ))}
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-info btn-sm mr-1"
                    onClick={() => actionCb({ id: item.id, type: 'view' })}
                  >
                    V
                  </button>
                  <button
                    className="btn btn-warning btn-sm mr-1"
                    onClick={() => actionCb({ id: item.id, type: 'edit' })}
                  >
                    E
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => actionCb({ id: item.id, type: 'delete' })}
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
  ) : null;
};
