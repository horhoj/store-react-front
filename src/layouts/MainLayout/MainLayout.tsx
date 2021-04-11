import React from "react";
import {MainMenu} from "../MainMenu";
import {MainHeader} from "../MainHeader";
import {MainFooter} from "../MainFooter";

export const MainLayout: React.FC = ({children}): JSX.Element => {
  return (
    <div className="d-flex flex-grow-1 flex-column">
      <header className="d-flex">
        <MainHeader/>
      </header>
      <div className="d-flex flex-grow-1">
        <div className={`d-flex `}>
          <MainMenu/>
        </div>
        <div className="p-2 d-flex flex-grow-1">
          {children}
        </div>
      </div>
      <div className="d-flex">
        <MainFooter/>
      </div>
    </div>
  )
}
