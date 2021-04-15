import React from 'react';

export const PublicLayout: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center">
      <div className="bg-white border rounded-lg p-3">{children}</div>
    </div>
  );
};
