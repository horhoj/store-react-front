import React from 'react';
import { FOOTER_MESSAGE } from '../../config/app';

export const PrivateFooter: React.FC = () => {
  return (
    <footer className="p-2 d-flex justify-content-center w-100">
      {FOOTER_MESSAGE}
    </footer>
  );
};
