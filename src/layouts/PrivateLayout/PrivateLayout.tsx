import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { PrivateFooter } from '../PrivateFooter';
import { PrivateMenu } from '../PrivateMenu';
import { PrivateHeader } from '../PrivateHeader';
import { appSelectors } from '../../store/app';

const mainMenuAlternateMode = css`
  margin-left: -230px;
  opacity: 0;
  visibility: hidden;
`;

const MainMenu = styled.div<{ isAlternateMenuMode: boolean }>`
  transition: opacity 0.25s ease, visibility 0.3s ease, margin-left 0.25s ease;
  ${({ isAlternateMenuMode }) =>
    isAlternateMenuMode ? mainMenuAlternateMode : ''}
`;

export const PrivateLayout: React.FC = ({ children }) => {
  const isAlternateMenuMode = useSelector(appSelectors.getIsAlternateMenuMode);
  return (
    <div className="d-flex flex-grow-1 flex-column bg-white">
      <header className="d-flex">
        <PrivateHeader />
      </header>
      <div className="d-flex flex-grow-1">
        <MainMenu isAlternateMenuMode={isAlternateMenuMode} className="d-flex">
          <PrivateMenu />
        </MainMenu>
        <main className="p-2 d-flex flex-grow-1">{children}</main>
      </div>
      <div className="d-flex">
        <PrivateFooter />
      </div>
    </div>
  );
};
