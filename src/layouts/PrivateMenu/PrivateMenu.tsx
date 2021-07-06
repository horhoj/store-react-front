import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getPathByName } from '../../router';

const MainMenu = styled.nav`
  min-width: 230px;
  color: #b8c7ce;
  background-color: #222d32;

  & a {
    color: #b8c7ce;
  }

  & .active {
    color: magenta !important;
    font-weight: bold;
    font-size: 120%;
    width: 100%;
  }
`;

export const PrivateMenu: React.FC = () => {
  return (
    <MainMenu className="p-2">
      <div>
        <NavLink exact={true} to={getPathByName('home')}>
          Главная
        </NavLink>
      </div>
      <div>
        <NavLink to={getPathByName('products')}>Товары</NavLink>
      </div>
      <div>
        <NavLink to={getPathByName('categories')}>Категории</NavLink>
      </div>
    </MainMenu>
  );
};
