import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Home/Header";

import Layout from "../Layout/header";
import Switch from "../../components/Switch";

import "./setting.scss";

const Alerts = () => {
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
                Alerts
              </Link>
              <Link to="/home">&times;</Link>
            </div>
            <div className="general-content">
              <div className="account-menu__divider"></div>
              <div className="alert-content">
                <div className="alert-description">
                  Browsing a website with an unconnected account selected
                </div>
                <div>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </div>
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="account-menu__divider"></div>
              <div className="alert-content">
                <div className="alert-description">
                  Browsing a website with an unconnected account selected
                </div>
                <div>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </div>
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="account-menu__divider"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Alerts;
