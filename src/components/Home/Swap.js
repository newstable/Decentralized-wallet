import React, { useState } from "react";
import Layout from "../../Pages/Layout/header";
import Header from "./Header";
import { Link } from "react-router-dom";
import eth_IMG from "../../assets/img/ethereum.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faExchange,
  faChevronDown,
  faChevronUp,
  faInfoCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Swap = () => {
  const [advance, setAdvance] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectModal, setSelectModal] = useState(false);
  const changeAdvance = () => {
    setAdvance(!advance);
  };
  const setModal = () => {
    setOpenModal(!openModal);
  };
  const setSelect = () => {
    setSelectModal(!selectModal);
  };
  return (
    <Layout>
      <Header />

      <div style={{ marginTop: "70px" }}>
        <div className="Align">
          <div className="swap-header">
            <div className="swap_h-cancel"></div>
            <div className="swap_h-title">Swap</div>
            <Link to="/home" className="swap_h-cancel">
              Cancel
            </Link>
          </div>
          <div className="padding-1">
            <div className="swap-back">
              <div className="swap-from-text">Swap from</div>
              <div style={{ width: "35%" }}></div>
              <div className="swap-max">Max</div>
            </div>
            <div className="swap-from">
              <div className="swap-from-option" onClick={() => setModal()}>
                <div className="swap-img-circle">
                  <img className="swap-from-img" src={eth_IMG}></img>
                </div>
                <div className="swap-from-option-ETH">ETH</div>
                <FontAwesomeIcon
                  className="swap-from-icon"
                  icon={faCaretDown}
                />
              </div>
              {openModal ? (
                <>
                  <div onClick={() => setModal()} className="modal"></div>
                  <div style={{ zIndex: "9001" }} className="modal-search">
                    <div className="swap-search">
                      <FontAwesomeIcon className="margin" icon={faSearch} />
                      <input
                        className="margin swap-search-input"
                        placeholder="Search for a token"
                      ></input>
                    </div>
                    <div className="token-list">
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              <input className="swap-from-input" placeholder="0"></input>
            </div>
            <div className="swap-font-1">0.4738 ETH available to swap</div>
            <FontAwesomeIcon className="swap-exchange" icon={faExchange} />
            <div className="swap-from">
              <div className="swap-font-2">Swap to</div>
            </div>
            <div className="swap-from">
              <div className="swap-to-option" onClick={() => setSelect()}>
                <div className="swap-to-img-circle">
                  <img className="swap-from-img" src={eth_IMG}></img>
                </div>
                <div className="swap-to-option-ETH">ETH</div>
                <FontAwesomeIcon
                  className="swap-from-icon"
                  icon={faCaretDown}
                />
              </div>
              {selectModal ? (
                <>
                  <div onClick={() => setSelect()} className="modal"></div>
                  <div className="modal_search">
                    <div className="swap-search">
                      <FontAwesomeIcon className="margin" icon={faSearch} />
                      <input
                        className="margin swap-search-input"
                        placeholder="Search for a token"
                      ></input>
                    </div>
                    <div className="token-list">
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                      <div className="token-list-item">
                        <div className="token-list-item-circle margin">
                          <img width="15px" height="28px" src={eth_IMG}></img>
                        </div>
                        <div className="token-list-item-font-1">
                          <span style={{ fontSize: "15px", fontWeight: "500" }}>
                            ETH
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "500" }}>
                            Ether
                          </span>
                        </div>
                        <div style={{ margin: "auto" }}>0 ETH</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="adanced" onClick={() => changeAdvance()}>
              Advanced Options
              <FontAwesomeIcon icon={advance ? faChevronUp : faChevronDown} />
            </div>
            {advance ? (
              <div className="swap-from">
                <div className="width_3">Slippage Toerance</div>
                <FontAwesomeIcon
                  className="width_1 margin"
                  icon={faInfoCircle}
                />
                <div className="advance-circle margin">2%</div>
                <div className="advance-circle margin active">3%</div>
                <div className="advance-circle margin width_2">custom</div>
              </div>
            ) : (
              ""
            )}
            <div className="swap-from">
              <div className="swap-btn swap-btn-disable">Review Swap</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Swap;
