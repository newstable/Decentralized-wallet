import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";
import "./account-detail.scss";
import QRCode from "react-qr-code";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Home/Header";

const Account_detail = () => {
  const [getPrivate, setPrivate] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const getPrivateClick = () => {
    setPrivate(!getPrivate);
  };
  const getPassword = (e) => {
    // if(e.)
    if (e.length > 0) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  };
  return (
    <>
      <Layout>
        <Header />
        <div className="account-detail" style={{ marginTop: "100px" }}>
          <div className="card">
            <div className="import-header">
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {!getPrivate ? (
                    <div
                      style={{
                        width: "16%",
                        marginTop: "11px",
                        cursor: "pointer",
                      }}
                      onClick={() => getPrivateClick()}
                    >
                      <FontAwesomeIcon icon={faAngleLeft} /> Back
                    </div>
                  ) : (
                    <div style={{ width: "16%" }}></div>
                  )}
                  <div
                    style={{
                      height: "64px",
                      width: "64px",
                      borderRadius: "32px",
                      margin: "auto",
                      marginTop: "-32px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        overflow: "hidden",
                        padding: "0px",
                        margin: "0px",
                        width: "64px",
                        height: "64px",
                        display: "inline-block",
                        background: "rgb(200, 20, 83)",
                      }}
                    >
                      <svg x="0" y="0" width="60" height="60">
                        <rect
                          x="0"
                          y="0"
                          width="64"
                          height="64"
                          transform="translate(4.983221152105917 -13.079409218775442) rotate(314.2 32 32)"
                          fill="#18A2F2"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          width="64"
                          height="64"
                          transform="translate(23.273183023731914 -25.08668920152236) rotate(340.9 32 32)"
                          fill="#FA6C00"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          width="64"
                          height="64"
                          transform="translate(-34.83942366112994 35.54668045854147) rotate(243.1 32 32)"
                          fill="#03535E"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                  <Link className="link_font-1" to="/home">
                    &times;
                  </Link>
                </div>
                <div className="editable-label account-details-modal__name">
                  <div className="editable-label__value">Account 1</div>
                  {getPrivate ? (
                    <button className="editable-label__icon-button">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="fas fa-pencil-alt editable-label__icon"
                      />
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                {getPrivate ? (
                  <div>
                    <div className="qrcode">
                      <QRCode value="" size={150} />
                      <div className="qrcode-address">
                        0x686c626E48bfC5DC98a30a9992897766fed4Abd3
                      </div>
                    </div>
                    <div className="button-group-account">
                      <button>View on Etherscan</button>
                      <button onClick={() => getPrivateClick()}>
                        Export Private Key
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="myaccountAddress">
                      <input
                        readOnly
                        value="0xe8B062e911350953f623F8675a247970C713245F"
                        className="address_input"
                      />
                    </div>
                    <div className="font-4">Show Private Keys</div>
                    <div className="font-5">
                      Type your Icicb Wallet Password
                    </div>
                    <input
                      type="password"
                      className="input-1"
                      onChange={(e) => getPassword(e.target.value)}
                    ></input>
                    <div className="warning">
                      Warning: Never disclose this key. Anyone with your private
                      keys can steal any assets held in your account.
                    </div>
                    <div className="buttons">
                      <Link to="/home" className="btn-confirm">
                        Cancel
                      </Link>
                      <button
                        className={
                          confirm
                            ? "btn-confirm confirm"
                            : "btn-confirm no-confirm"
                        }
                      >
                        Confirm
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Account_detail;
