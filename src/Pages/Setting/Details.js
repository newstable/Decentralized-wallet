import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Home/Header";
import Layout from "../Layout/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCopy } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <Layout>
      <Header />
      <div style={{ padding: "0px 15px" }}>
        <div className="setting-general">
          <div className="general-title">
            <Link
              to="/setting/contacts"
              style={{ textAlign: "center", marginLeft: "10px" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              Details
            </Link>
            <Link to="/home">&times;</Link>
          </div>
          <div style={{ margin: "20px 0 0 20px" }}>
            <div>
              <div>
                <svg
                  style={{ borderRadius: "50%" }}
                  x="0"
                  y="0"
                  width="65"
                  height="65"
                >
                  <rect
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    transform="translate(5.26920172312488455 -0.417794384265588) rotate(294.6 14 14)"
                    fill="#FB1877"
                  ></rect>
                  <rect
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    transform="translate(35.734953379950241 27.291487661789755) rotate(113.2 14 14)"
                    fill="#C8145F"
                  ></rect>
                  <rect
                    x="0"
                    y="0"
                    width="65"
                    height="65"
                    transform="translate(-1.27869831465055 17.423828905347758) rotate(188.3 14 14)"
                    fill="#03595E"
                  ></rect>
                </svg>
              </div>
            </div>
          </div>
          <div className="setting-detail-btn">Edit</div>
          <div style={{ color: "#c0b099", fontSize: "15px" }}>
            Ethereum Public Address
          </div>
          <div style={{ display: "flex", margin: "5px 0 25px" }}>
            <div style={{ margin: "auto", marginLeft: "0" }}>
              0x 0700 f105 2B41 7709 b917 4D53 3f6f 7261 1b4b 11DF
            </div>
            <FontAwesomeIcon className="setting-copy" icon={faCopy} />
          </div>
          <div style={{ color: "#c0b099", fontSize: "15px" }}>Memo</div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
