import React from "react";

export const PublicLayout: React.FC = ({children}): JSX.Element => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
