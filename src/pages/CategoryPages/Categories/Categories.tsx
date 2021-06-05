import React from 'react';
import { CategoryList } from './CategoryList';

export const Categories: React.FC = () => {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <h4>Категории</h4>
      <CategoryList isModal={false} selectActionCb={() => {}} />
    </div>
  );
};
