import React from "react";
import Layout from "../Layout/header";
import arrow from "../../assets/img/right-arrow.png";
import Header from "../../components/Home/Header";
import Detail from "../../components/Home/Detail";

import "./home.scss";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <div style={{ marginTop: "70px" }}>
          <Detail />
        </div>
      </Layout>
    </>
  );
};

export default Home;
