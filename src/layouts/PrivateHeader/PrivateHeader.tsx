import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authActions } from '../../store/auth';
import { userSelectors } from '../../store/user';
import { appActions } from '../../store/app';

const Wrapper = styled.div`
  background-color: #3c8dbc;
  color: white;
  height: 4rem;
`;

export const PrivateHeader: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userSelectors.getData);

  const logoutHandle = () => {
    dispatch(authActions.logout());
  };

  const menuBtnClkHandle = () => {
    dispatch(appActions.toggleMenuMode());
  };

  return (
    <Wrapper
      className={`p-2 d-flex w-100 justify-content-between align-items-center`}
    >
      <div>
        <button
          className="mr-4 btn btn-primary"
          type="button"
          onClick={menuBtnClkHandle}
        >
          M
        </button>
        <span>Панель управления</span>
      </div>

      <div className="d-flex">
        <button
          className="btn btn-primary mr-2 app__btn-min-width"
          type="button"
        >
          {userData ? userData.email : ''}
        </button>
        <button
          className="btn btn-primary app__btn-min-width"
          onClick={logoutHandle}
          type="button"
        >
          Выход
        </button>
      </div>
    </Wrapper>
  );
};
