import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "./Layout";
import { ethers } from "ethers";
import cryptoJs from "crypto-js";
import { useBlockchainContext } from "../../context"

var CryptoJS = require("crypto-js");

const CreatePassword = () => {

    const history = useHistory();
    const [state, { createWallet }] = useBlockchainContext();

    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(false);
    const [conformPass, setConformPass] = useState("");
    const [checkTerm, setCheckTerm] = useState(false);

    const setPass = (val) => {
        setPassword(val);
        val.length > 7 ? setValid(true) : setValid(false);
    }

    const create = () => {
        try {
            createWallet(password);
            history.push("/seed-phrase");
        } catch (err) {
            console.log("wallet create error");
        }
    }

    //   function Password() {}
    return (
        <>
            <Layout>
                <div style={{ marginTop: "0", padding: "0 1em" }}>
                    <div className="card">
                        <h2 style={{ textAlign: "center" }}>Create Password</h2>
                        <p>New password (8 characters min)</p>
                        <input
                            type="password"
                            className="input-password w100"
                            onChange={(e) => setPass(e.target.value)}
                        />
                        {!valid && password != "" ? (
                            <span style={{ color: "#f44336", fontSize: "0.75em" }}>
                                Password not long enough
                            </span>
                        ) : (
                            ""
                        )}
                        <p>Confirm password</p>
                        <input
                            type="password"
                            className="input-password w100"
                            onChange={(e) => setConformPass(e.target.value)}
                        />
                        {password != conformPass && conformPass != "" ? (
                            <span style={{ color: "#f44336", fontSize: "0.75em" }}>
                                Passwords Don"'"t Match
                            </span>
                        ) : (
                            ""
                        )}
                        <label className=" mt3  container-check">
                            I have read and agree to the{" "}
                            <a style={{ color: "#016da1" }} href="https://metamask.io/terms.html" target="_blank" >
                                {" "}
                                Terms of Use
                            </a>
                            <input type="checkbox" onChange={() => { setCheckTerm(!checkTerm) }} />
                            <span className="checkmark"></span>
                        </label>
                        <div className="row center" style={{ marginTop: "50px" }}>
                            {valid && password == conformPass && checkTerm ? (
                                <button className="btn-puc" onClick={create}>
                                    Create
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CreatePassword;
