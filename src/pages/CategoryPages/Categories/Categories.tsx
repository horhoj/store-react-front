import React from 'react';
import { CategoryList } from './CategoryList';

export const Categories: React.FC = () => {
  return <CategoryList isModal={false} selectActionCb={() => {}} />;
};
