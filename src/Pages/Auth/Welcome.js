import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "./Layout";

import { useBlockchainContext } from "../../context"
import "./welcome.scss";

const Welcome = () => {
    const history = useHistory();

    const [state] = useBlockchainContext();
    useEffect(() => {
        if(!!state.SeedHash){
            history.push("/home/lock");
        }
    }, []);
    
    return (
        <>
            <Layout>
                <div className="welcomeCotnent">
                    <h3>Welcome to ICICB Metamask</h3>
                    <p>Connecting you to Ethereum and the Decentralized Web.</p>
                    <div>
                        <Link className="btn-puc" to="/select-action">
                            Get Started
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Welcome;
