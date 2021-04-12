import React from "react";
import styles from "./styles.module.scss"
import {useSelector} from "react-redux";
import {getUserIsAuthenticated} from "../../store/user";

export const PrivateHeader: React.FC = (): JSX.Element => {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated)
  return (
    <div className={`p-2 d-flex w-100 justify-content-between align-items-center ${styles.mainHeader}`}>
      <div>
        <button className="mr-4 btn btn-primary">
          M
        </button>
        <span>
          Admin Panel
        </span>
      </div>
      <div>auth: {JSON.stringify(userIsAuthenticated)}</div>
      <div>
        <button className="btn btn-primary">
          Admin
        </button>
      </div>
    </div>
  )
}
