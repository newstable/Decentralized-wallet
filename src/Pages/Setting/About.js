import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/header";
import Header from "../../components/Home/Header";
import logo from "../../assets/img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./setting.scss";

const Experimental = () => {
  let option = [
    "USD - United States Dollar",
    "STORJ - Storj",
    "TKN - TokenCard",
    "PAY - TenX",
  ];
  let language = ["English", "Chinese", "Russian", "Spanish"];
  const [toggle, setValue] = useState(false);
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
                About
              </Link>
              <Link to="/home">&times;</Link>
            </div>
            <div className="general-content">
              <div className="general-content-item">
                <span>MetaMask Version</span>
                <span className="general-content-description">10.10.2</span>
              </div>

              <div className="general-content-item">
                <span>MetaMask is designed and built around the world.</span>
              </div>
            </div>
            <div>
              <h3>Links</h3>
              <div className="link-group">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms Use</Link>
                <Link to="#">Attributions</Link>
              </div>
              <div className="m-b"></div>
              <div className="link-group">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms Use</Link>
                <Link to="#">Attributions</Link>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{ marginTop: "40px" }}
                  src={logo}
                  className="info-tab__logo"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Experimental;
