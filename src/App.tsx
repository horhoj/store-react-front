import React from 'react';
import {HomePage} from "./pages/HomePage";
import {MainLayout} from "./layouts/MainLayout";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="d-flex min-vh-100 min-vw-100">
        <MainLayout>
          <HomePage/>
        </MainLayout>
    </div>

  )
}


