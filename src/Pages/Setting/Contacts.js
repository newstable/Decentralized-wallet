import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/header";
import SendAccount from "../../components/Home/Send-Accounts";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./setting.scss";
const Contacts = () => {
  const [read, setRead] = useState(true);
  const changeReadMore = () => {
    setRead(!read);
  };
  return (
    <>
      <Layout>
        <Header />
        <div className="setting-general">
          <div className="card">
            <div className="general-title">
              <Link
                to="/setting/land"
                style={{ textAlign: "center", marginLeft: "10px" }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                Contacts
              </Link>
              <Link to="/setting/addContact" className="contact-btn">
                Add Contact
              </Link>
              <Link to="/home">&times;</Link>
            </div>
            <div className="contacts-container">
              <div className="contacts-content" style={{ width: "100%" }}>
                <div className="recent">Recent</div>
                <div className="setting-account">
                  <Link to="/setting/details">
                    <div className="setting-display">
                      <div>
                        <svg
                          style={{ borderRadius: "50%" }}
                          x="0"
                          y="0"
                          width="28"
                          height="28"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                            fill="#FB1877"
                          ></rect>
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                            fill="#C8145F"
                          ></rect>
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                            fill="#03595E"
                          ></rect>
                        </svg>
                      </div>
                      <div className="accont_font">0x9D11...F20E</div>
                    </div>
                  </Link>
                  <Link to="/setting/details">
                    <div className="setting-display">
                      <div>
                        <svg
                          style={{ borderRadius: "50%" }}
                          x="0"
                          y="0"
                          width="28"
                          height="28"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                            fill="#FB1877"
                          ></rect>
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                            fill="#C8145F"
                          ></rect>
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                            fill="#03595E"
                          ></rect>
                        </svg>
                      </div>
                      <div className="accont_font">0x9D11...F20E</div>
                    </div>
                  </Link>
                  <Link to="/setting/details">
                    <div className="setting-display">
                      <div>
                        <svg
                          style={{ borderRadius: "50%" }}
                          x="0"
                          y="0"
                          width="28"
                          height="28"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                            fill="#FB1877"
                          ></rect>
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                            fill="#C8145F"
                          ></rect>
                          <rect
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                            transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                            fill="#03595E"
                          ></rect>
                        </svg>
                      </div>
                      <div className="accont_font">0x9D11...F20E</div>
                    </div>
                  </Link>
                  {read ? (
                    <div className="setting-account">
                      <Link>
                        <div
                          className="setting-display"
                          onClick={() => changeReadMore()}
                        >
                          <div className="load_account">Load more</div>
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to="/setting/details"
                      onClick={() => changeReadMore()}
                    >
                      <div className="setting-display">
                        <div>
                          <svg
                            style={{ borderRadius: "50%" }}
                            x="0"
                            y="0"
                            width="28"
                            height="28"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="28"
                              height="28"
                              transform="translate(-0.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                              fill="#FB1877"
                            ></rect>
                            <rect
                              x="0"
                              y="0"
                              width="28"
                              height="28"
                              transform="translate(-2.734953379950241 17.291487661789755) rotate(113.2 14 14)"
                              fill="#C8145F"
                            ></rect>
                            <rect
                              x="0"
                              y="0"
                              width="28"
                              height="28"
                              transform="translate(-15.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                              fill="#03595E"
                            ></rect>
                          </svg>
                        </div>
                        <div className="accont_font">0x9D11...F20E</div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contacts;
