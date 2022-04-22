import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/header";
import Select from "../../components/Select";
import Switch from "../../components/Switch";
import Header from "../../components/Home/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./setting.scss";

const General = () => {
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
        <Header></Header>
        <div className="setting-general">
          <div className="card">
            <div className="general-title">
              <Link
                to="/setting/land"
                style={{ textAlign: "center", marginLeft: "10px" }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                General
              </Link>
              <Link to="/home">&times;</Link>
            </div>
            <div className="general-content">
              <div className="general-content-item">
                <span>Currency Conversion</span>
                <span className="general-content-description">
                  No Currency Conversion Date Available
                </span>
              </div>
              <div className="general-content-item">
                <Select value={option} />
              </div>
              <div className="general-content-item">
                <span>Primary Currency</span>
                <span className="general-content-description">
                  Select native to prioritize displaying values in the native
                  currency of the chain (e.g. ETH). Select Fiat to prioritize
                  displaying values in your selected fiat currency.
                </span>
              </div>
              <div className="general-content-item">
                <div style={{ display: "flex" }}>
                  <div className="radio-group">
                    <input type="radio" name="general-radio" checked />
                    <label
                      htmlFor="native-primary-currency"
                      className="radio-label"
                    >
                      ETH
                    </label>
                  </div>
                  <div className="radio-group">
                    <input type="radio" name="general-radio" />
                    <label
                      htmlFor="native-primary-currency"
                      className="radio-label"
                    >
                      FLAT
                    </label>
                  </div>
                </div>
              </div>
              <div className="general-content-item">
                <span>Current Language</span>
                <span className="general-content-description">English</span>
              </div>
              <div className="general-content-item">
                <Select value={language} />
              </div>
              <div className="general-content-item">
                <span>Use Blockies Identicon</span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
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
                <span>Hide Tokens Without Balance</span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
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

export default General;
