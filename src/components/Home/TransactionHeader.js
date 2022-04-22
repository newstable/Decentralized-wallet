import React, { useState } from "react";
import "./transaction.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEllipsisV,
  faQrcode,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

const TransactionHeader = () => {
  const [openModal, setModal] = useState(false);
  const Modalstatue = () => {
    setModal(!openModal);
  };
  return (
    <div className="top-1 transaction-1">
      <Link to="/home" className="back-btn">
        <FontAwesomeIcon icon={faAngleLeft} style={{ marginRight: "4px" }} />
        Main for Betting / ETh
      </Link>
      <div className="icon-position" onClick={() => Modalstatue()}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
      {openModal ? (
        <>
          <div className="modal" onClick={Modalstatue}></div>
          <div className="modal-container">
            <div className="expandView padding-5">
              <FontAwesomeIcon icon={faQrcode} />
              <Link to="/home/account-detail">Account Details</Link>
            </div>
            <div className="expandView padding-5">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <a href="#">View Account on Ethereum</a>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TransactionHeader;
