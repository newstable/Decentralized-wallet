import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

import Layout from "../Layout/header";
import Header from "../../components/Home/Header";

const NewContract = () => {
  return (
    <Layout>
      <Header />
      <div className="setting-general">
        <div className="general-title">
          <Link
            to="/setting/contacts"
            style={{ textAlign: "center", marginLeft: "10px" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            New Contact
          </Link>
          <Link to="/home">&times;</Link>
        </div>
        <div style={{ minHeight: "370px" }}>
          <div className="newcontact-container">
            <div>UserName</div>
            <input />
          </div>
          <div className="newcontact-container">
            <div>Ethereum Public Address</div>
            <div className="newcontact-input">
              <FontAwesomeIcon style={{ margin: "auto" }} icon={faSearch} />
              <input
                style={{ margin: "auto" }}
                className="publicaddress"
                placeholder="Search, public address(0x), or ENS"
              />
              <button
                style={{ margin: "auto" }}
                className="send-button"
              ></button>
            </div>
          </div>
        </div>
        <div className="newcontact-btngroup">
          <Link to="/home">Cancel</Link>
          <Link className="btn-primary">Save</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NewContract;
