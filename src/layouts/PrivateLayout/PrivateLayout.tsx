import React from "react";
import {PrivateFooter} from "../PrivateFooter";
import {PrivateMenu} from "../PrivateMenu";
import {PrivateHeader} from "../PrivateHeader";

export const PrivateLayout: React.FC = ({children}) => {
  return (
    <div className="d-flex flex-grow-1 flex-column bg-white">
      <header className="d-flex">
        <PrivateHeader/>
      </header>
      <div className="d-flex flex-grow-1">
        <div className={`d-flex `}>
          <PrivateMenu/>
        </div>
        <div className="p-2 d-flex flex-grow-1">
          {children}
        </div>
      </div>
      <div className="d-flex">
        <PrivateFooter/>
      </div>
    </div>
  )
}
