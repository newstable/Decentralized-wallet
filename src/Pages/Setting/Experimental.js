import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/header";
import Switch from "../../components/Switch";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./setting.scss";

const Experimental = () => {
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
                Experimental
              </Link>
              <Link to="/home">&times;</Link>
            </div>
            <div className="general-content">
              <div className="general-content-item">
                <span>Use Token Detection</span>
                <span className="general-content-description">
                  We use third-party APIs to detect and display new tokens sent
                  to your wallet. Turn off if you don’t want MetaMask to pull
                  data from those services.
                </span>
              </div>
              <div className="general-content-item">
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Enable Enhanced Gas Fee UI</span>
                <span className="general-content-description">
                  We've updated how gas estimation and customization works. Turn
                  on if you'd like to use the new gas experience.
                  <a
                    href="https://metamask.io/1559.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more
                  </a>
                </span>
              </div>
              <div className="general-content-item">
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Experimental;
