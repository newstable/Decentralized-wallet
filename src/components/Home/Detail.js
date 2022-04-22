import React, { useState } from "react";
import Account from "./Account";
import Main from "./main";
import Transaction from "./Transaction";
import Footer from "./Footer";

const Detail = () => {
  return (
    <>
      <Account />
      <Main />
      <Transaction />
      <Footer />
    </>
  );
};

export default Detail;