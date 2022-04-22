import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlusCircle,
  faCheckCircle,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Activity.scss";

const Activity = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activity, setActivity] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };
  const changeActivity = () => {
    setActivity(!activity);
  };
  return (
    <>
      <div className="activity" onClick={() => setModal()}>
        <div className="list-item__icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="#281a05"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="29"
              height="29"
              rx="14.5"
              stroke="#2F80ED"
            ></rect>
            <path
              d="M18.5851 9.88921C18.5586 9.89005 18.5321 9.89238 18.5057 9.89618H14.3207C14.0635 9.89254 13.8243 10.0276 13.6947 10.2497C13.565 10.4719 13.565 10.7466 13.6947 10.9687C13.8243 11.1908 14.0635 11.3259 14.3207 11.3222H16.8777L9.53811 18.6614C9.35182 18.8402 9.27679 19.1058 9.34193 19.3557C9.40707 19.6056 9.60222 19.8007 9.85211 19.8658C10.102 19.931 10.3676 19.8559 10.5464 19.6697L17.886 12.3305V14.8874C17.8823 15.1445 18.0175 15.3837 18.2396 15.5133C18.4617 15.643 18.7364 15.643 18.9585 15.5133C19.1806 15.3837 19.3158 15.1445 19.3121 14.8874V10.6997C19.3409 10.4919 19.2767 10.282 19.1366 10.1259C18.9965 9.96973 18.7948 9.88316 18.5851 9.88921Z"
              fill="#2F80ED"
            ></path>
          </svg>
        </div>
        <div className="list-item__heading">
          <h2 className="list-item__title">Send</h2>
        </div>
        <div className="list-item__subheading">
          <h3>
            <div className="transaction-status transaction-status--confirmed">
              Feb 17 .&nbsp;
            </div>
            <span
              className="transaction-list-item__address"
              title="To: 0xd27...a22f"
            >
              {" "}
              To: 0xd27...a22f
            </span>
          </h3>
        </div>
        <div className="list-item__right-content">
          <h2
            title="-0.008 ETH"
            className="transaction-list-item__primary-currency"
          >
            -0.008 ETH
          </h2>
          <h3 className="transaction-list-item__secondary-currency">
            -0.008 ETH
          </h3>
        </div>
      </div>
      {openModal ? (
        <>
          <div className="modal" onClick={() => setModal()}></div>
          <div className="activity-modal">
            <div className="act-display act-modal-header">
              <div className="act-left">Send</div>
              <div className="act-right act-pointer" onClick={() => setModal()}>
                &times;
              </div>
            </div>
            <div className="act-modal-container">
              <div className="act-display">
                <div className="act-left act-bold">Status</div>
                <div className="act-right act-blue act-pointer">
                  View on block explorer
                </div>
              </div>
              <div className="act-display">
                <div className="act-left act-green">Confirmed</div>
                <div className="act-right act-blue act-pointer">
                  Copy Transaction ID
                </div>
              </div>
              <div className="act-display">
                <div className="act-left act-bold">From</div>
                <div className="act-right act-bold">To</div>
              </div>
              <div className="act-display">
                <div className="account_1 act-center"></div>
                <div className="act-center act-pointer">0xe8B...245F</div>
                <div className="act-circle act-center">
                  <FontAwesomeIcon
                    style={{ padding: "5px" }}
                    icon={faArrowRight}
                  />
                </div>
                <div className="account_1 act-center"></div>
                <div className="act-center">0x9D1...F20D</div>
              </div>
              <div className="act-display">
                <div className="act-bold act-left">Transaction</div>
              </div>
              <div className="act-display">
                <div className="act-left">Nonce</div>
                <div className="act-right">2</div>
              </div>
              <div style={{ borderBottom: "1px solid #6c4f24" }}></div>
              <div className="act-display">
                <div className="act-left">Amount</div>
                <div className="act-right act-bold">-0.01ETH</div>
              </div>
              <div className="act-display">
                <div className="act-left">Gas Limit(Units)</div>
                <div className="act-right">21000</div>
              </div>
              <div className="act-display">
                <div className="act-left">Gas Used(Units)</div>
                <div className="act-right">21000</div>
              </div>
              <div className="act-display">
                <div className="act-left">Base Fee(GWEI)</div>
                <div className="act-right">15.071227646</div>
              </div>
              <div className="act-display">
                <div className="act-left">Priority Fee(GWEI)</div>
                <div className="act-right">1.5</div>
              </div>
              <div className="act-display">
                <div className="act-left">Total Gas Fee</div>
                <div className="act-right">0.000348 ETh</div>
              </div>
              <div className="act-display">
                <div className="act-left">Max Fee Per Gas</div>
                <div className="act-right">0.000000021ETH</div>
              </div>
              <div style={{ borderBottom: "1px solid #6c4f24" }}></div>
              <div className="act-display">
                <div className="act-left">Total</div>
                <div className="act-right act-bold">0.010348 ETH</div>
              </div>
              <div
                className="act-display act-pointer"
                style={{ padding: "10px 10px", width: "130px" }}
                onClick={() => changeActivity()}
              >
                <FontAwesomeIcon className="act-center" icon={faPlusCircle} />
                <div className="act-bold act-center">Activity log:</div>
              </div>
              {activity ? (
                <div style={{ marginLeft: "10px" }}>
                  <div className="act-display act-pointer act-icon-1">
                    <FontAwesomeIcon className="" icon={faCheckCircle} />
                    <div className="act-font-1 act-left">
                      Transaction confirmed at 04:21 on 3/15/2022
                    </div>
                  </div>
                  <div className="act-display act-pointer act-icon-2">
                    <FontAwesomeIcon className="" icon={faPlusCircle} />
                    <div className="act-font-1 act-left">
                      Transaction created with a value of 0.036 ETh at 04:21 on
                      3/15/2022.
                    </div>
                  </div>
                  <div className="act-display act-pointer">
                    <FontAwesomeIcon
                      className=" act-translation"
                      icon={faArrowCircleRight}
                    />
                    <div className="act-font-1 act-left">
                      Transaction submitted with estimated gas fee of 362334.128
                      GWEI at 04:21 on 3/15/2022.
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Activity;
