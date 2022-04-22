import React from "react";

import Layout from "../../Pages/Layout/header";
import Header from "./Header";
import Main from "./main";
import TransactionHeader from "./TransactionHeader";
import Activity from "../../Pages/Home/Activity";

const AssetTransaction = () => {
  return (
    <Layout>
      <Header />
      <div>
        <TransactionHeader />
        <Main />
        <Activity />
      </div>
    </Layout>
  );
};

export default AssetTransaction;
