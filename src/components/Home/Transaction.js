import React, { useState } from "react";
import Assets from "../../Pages/Home/Asset";
import Activity from "../../Pages/Home/Activity";
import { Link } from "react-router-dom";

const Transaction = () => {
  const [btnState, setBtnState] = useState(1);
  const btStateChange = (val) => {
    setBtnState(val);
  };
  return (
    <div className="tab">
      <ul className="tabs__list home__tabs">
        <li
          onClick={() => btStateChange(1)}
          className={
            btnState == 1 ? "tab home__tab click" : "tab home__tab noClick"
          }
        >
          <button className="cursor_1">Assets</button>
        </li>
        <li
          onClick={() => btStateChange(2)}
          className={
            btnState == 2 ? "tab home__tab click" : "tab home__tab noClick"
          }
        >
          <button className="activityButton cursor_1">Activity</button>
        </li>
      </ul>
      {btnState == 1 ? <Assets></Assets> : <Activity></Activity>}
      {btnState == 1 ? (
        <div className="box">
          <h6 className="box-typo">Don't see your token?</h6>
          <div className="import-token-link box--flex-direction-row box--text-align-center">
            <a
              className="button btn-link import-token-link__link"
              role="button"
            >
              Refresh list
            </a>
            or
            <Link
              to="/home/Import-token"
              className="button btn-link import-token-link__link"
              role="button"
            >
              import tokens
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Transaction;
