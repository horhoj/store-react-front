import React from "react";

export const MainLayout: React.FC = ({children}): JSX.Element => {
  return (
    <div className="min-vh-100 min-vw-100 p-2 d-flex">
      <div className="rounded border p-2 flex-grow-1 bg-white">
        {children}
      </div>
    </div>
  )
}
