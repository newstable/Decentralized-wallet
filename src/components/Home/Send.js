import React, { useState } from "react";
import { Link } from "react-router-dom";
import scan from "../../assets/img/scanning.png";
import search from "../../assets/img/search.png";
import ethereum from "../../assets/img/ethereum.png";
import arrow from "../../assets/img/right-arrow.png";
import "./send.scss";
import Layout from "../../Pages/Layout/header";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SendAccounts from "./Send-Accounts";
import MyAccount from "./MyAccounts";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
const Send = () => {
  const [showAccount, setShowAccount] = useState(true);
  const [qrscan, setQrscan] = useState(false);
  const showQRscanner = () => {
    setQrscan(!qrscan);
    console.log(qrscan);
  };
  const showMyAccount = () => {
    setShowAccount(!showAccount);
  };
  return (
    <Layout>
      <Header />
      <div className="send-container">
        <div className="send-header">
          <div className="s_h-title">Send to</div>
          <Link to="/home" className="s_h-close">
            &times;
          </Link>
        </div>
        <div className="send_to-row">
          <div className="send-input">
            <FontAwesomeIcon className="send-search" icon={faSearch} />
            <input
              className="s_input"
              placeholder="Search,public address (0x), or ENS"
            ></input>
            <button
              className="send-button"
              onClick={() => showQRscanner()}
            ></button>
          </div>
        </div>
        <button className="transfer_btn" onClick={() => showMyAccount()}>
          {showAccount ? "Transfer between my accounts" : "< Back to All"}
        </button>
        <div className="recent_font">
          {showAccount ? "Recents" : "My Accounts"}
        </div>
        {showAccount ? <SendAccounts /> : <MyAccount />}
        {qrscan ? (
          <>
            <BarcodeScannerComponent width={500} height={500} />
          </>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Send;
