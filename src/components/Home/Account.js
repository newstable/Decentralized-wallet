import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import CopyText from "react-copy-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faDotCircle,
  faExpandAlt,
  faEllipsisV,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";

const Account = () => {
  const [myAccount, setMyAccount] = useState("");
  // useEffect(() => {
  //   // chrome.storage.sync.get("Mnemonic", function (result) {
  //   //   console.log(typeof result.Mnemonic);
  //   //   let mnemonicWallet = ethers.Wallet.fromMnemonic(result.Mnemonic);
  //   //   console.log(typeof mnemonicWallet.privateKey);
  //   // });
  //   chrome.storage.local.get("Mnemonic", function (result) {
  //     let mnemonicWallet = ethers.Wallet.fromMnemonic(result.Mnemonic);
  //     setMyAccount(mnemonicWallet.privateKey);
  //   });
  // });
  function showDropdown() {
    setDrop(!dropStatus);
  }

  const copyAccount = () => {
    setAccountCopy(myAccount);
    setTooltip_txt("Copied");
    setChangeClass("tooltip_Click");
    setTimeout(() => {
      setTooltip_txt("Copy to clipboard");
      setChangeClass("tooltip");
    }, 5000);
  };
  const inputEl = useRef(null);
  const [tooltip_txt, setTooltip_txt] = useState("Copy to clipboard");
  const [accountCopy, setAccountCopy] = useState("");
  const [dropStatus, setDrop] = useState(false);
  const [changeClass, setChangeClass] = useState("tooltip");
  var styledAddress = myAccount
    ? myAccount.slice(0, 4) + "..." + myAccount.slice(-4)
    : "";

  return (
    <>
      <div className="accountInfo">
        <button className="networkStatus">
          <div className="circle">
            <span></span>
          </div>
          <div className="statusTitle">Not connected</div>
        </button>
        <div
          className="account"
          data-tip={tooltip_txt}
          data-place="bottom"
          data-type="dark"
          onClick={() => copyAccount()}
        >
          <CopyText text={accountCopy.toString()} />
          <p>Account1</p>
          <p>{styledAddress}</p>
          <ReactTooltip className={changeClass} />
        </div>
        <div className="threeDot">
          <FontAwesomeIcon
            className="dropbtn icons btn-right showLeft"
            onClick={(e) => showDropdown()}
            icon={faEllipsisV}
          />
        </div>
      </div>
      <div
        ref={inputEl}
        id="myDropdown"
        className={`dropdown-content ${dropStatus ? "show" : ""}`}
      >
        <div className="expandView">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          <a href="#">View Account on Ethereum</a>
        </div>
        <div className="expandView">
          <FontAwesomeIcon icon={faExpandAlt} />
          <a href="#">Expand View</a>
        </div>
        <div className="expandView">
          <FontAwesomeIcon icon={faQrcode} />
          <Link to="/home/account-detail">Account Details</Link>
        </div>
        <div className="expandView">
          <FontAwesomeIcon icon={faDotCircle} />
          <Link to="/home/account-detail">Connected sites</Link>
        </div>
      </div>
    </>
  );
};

export default Account;
