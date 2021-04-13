import React from "react";
import {useDispatch} from "react-redux";
import {setIsAuthenticated} from "../../store/user";
import styles from './styles.module.scss'

export const LoginPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const loginHandle = () => {
    dispatch(setIsAuthenticated(true));
  }
  return (
    <div className={`d-flex  flex-grow-1 flex-column ${styles.loginForm}`}>
      <div className="h3">Вход в систему</div>
      <div className="small mt-2">Почта</div>
      <input type="text" className="form-control"/>
      <div className="small mt-2">Пароль</div>
      <input type="text" className="form-control"/>
      <button
        onClick={loginHandle}
        className="btn btn-primary mt-3"
      >
        login
      </button>
    </div>
  )
}
