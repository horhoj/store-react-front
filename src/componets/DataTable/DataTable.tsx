import React from 'react';
import { DataTableProps } from './types';
import { Spinner } from '../Spinner';

const ARRAY_UP = <>&uArr;</>;
const ARRAY_DOWN = <>&dArr;</>;

export const DataTable: React.FC<DataTableProps> = ({
  items,
  visibleFields,
  isLoading,
  columnClkCb,
  sortAsc,
  sortField,
}) => {
  return (
    <div className={`w-100 position-relative`}>
      {isLoading ? <Spinner parentComponentCenterPosition={true} /> : ''}
      {items && visibleFields ? (
        <fieldset disabled={isLoading}>
          <table
            className={`table table-striped table-sm ${
              isLoading ? 'app__disabled' : ''
            }`}
          >
            <thead>
              <tr>
                <th className="border bg-primary text-white text-center">№</th>
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
                      {index + 1}
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
                      <button className="btn btn-info btn-sm mr-1">V</button>
                      <button className="btn btn-warning btn-sm mr-1">E</button>
                      <button className="btn btn-danger btn-sm">D</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
      ) : null}
    </div>
  );
};
