import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlus,
  faArrowDown,
  faComments,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/img/avatar.png";

const Accounts = (props) => {
  const { setModal } = props;

  const history = useHistory();
  const lockClick = () => {
    chrome.storage.local.set({ Mnemonic: "" });
    history.push("/home/lock");
  };
  return (
    <div id="modal" className="modal">
      <div className="account-div">
        <div className="account-menu__item account-menu__header">
          My Accounts
          <button
            className="button btn--rounded btn-default account-menu__lock-button"
            role="button"
            onClick={() => lockClick()}
          >
            Lock
          </button>
        </div>
        <div className="account-menu__divider"></div>
        <div className="account-container active">
          <div className="account-item">
            <div className="account-check-mark">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="account-avatar">
              <img className="avatar" src={avatar} />
            </div>
            <div className="account-menu__account-info">
              <div className="account-menu__name">Account 1</div>
              <div
                className="currency-display-component account-menu__balance"
                title="0.00028227 ETH"
              >
                <span className="currency-display-component__text">
                  0.00028227
                </span>
                <span className="currency-display-component__suffix">ETH</span>
              </div>
            </div>
            <div className="keyring-label allcaps">Imported</div>
            <div className="account-menu__icon-list">
              <div
                className="icon-border"
                style={{ height: "32px", width: "32px" }}
              >
                <span className="icon-with-fallback__fallback">R</span>
              </div>
            </div>
          </div>
        </div>
        <div className="account-container">
          <div className="account-item">
            <div className="account-check-mark">
              {/* <FontAwesomeIcon icon={faCheck} /> */}
            </div>
            <div className="account-avatar">
              <img className="avatar" src={avatar} />
            </div>
            <div className="account-menu__account-info">
              <div className="account-menu__name">Account 1</div>
              <div
                className="currency-display-component account-menu__balance"
                title="0.00028227 ETH"
              >
                <span className="currency-display-component__text">
                  0.00028227
                </span>
                <span className="currency-display-component__suffix">ETH</span>
              </div>
            </div>
          </div>
        </div>
        <div className="account-menu__divider"></div>
        <Link
          to="/home/create-account"
          className="account-menu__item--clickable"
        >
          <div className="account-menu__item__icon">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="account-menu__item__text">
            <div>Create Account</div>
          </div>
        </Link>
        <Link
          className="account-menu__item--clickable"
          to="/home/import-account"
        >
          <div className="account-menu__item__icon">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="account-menu__item__text">
            <div>Import Account</div>
          </div>
        </Link>
        <Link
          className="account-menu__item--clickable"
          to="/home/connect-wallet"
        >
          <div className="account-menu__item__icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="account-menu__item__text">
            <div>Connect Hardware Wallet</div>
          </div>
        </Link>
        <div className="account-menu__divider"></div>
        <div className="account-menu__item--clickable">
          <div className="account-menu__item__icon">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div className="account-menu__item__text">Support</div>
        </div>
        <Link className="account-menu__item--clickable" to="/setting/land">
          <div className="account-menu__item__icon">
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div className="account-menu__item__text">
            <div>Settings</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Accounts;
