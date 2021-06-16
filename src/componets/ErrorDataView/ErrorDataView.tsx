import React from 'react';
import { ErrorDataViewProps } from './types';

export const ErrorDataView: React.FC<ErrorDataViewProps> = ({
  error,
  errorData,
}) => {
  let result = null;
  if (error === 422 && errorData) {
    const errors = errorData?.errors;
    const keys = Object.keys(errors);
    result = keys.map((key) => (
      <div key={key}>
        {key} - {errors[key].join(', ')}
      </div>
    ));
  }

  return <>{result}</>;
};
