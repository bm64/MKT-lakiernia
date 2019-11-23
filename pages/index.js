import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";

function Home() {
  return (
    <Layout>
      <div className="relative">
        <Header />
        <img className="absolute top-0" src={"/mobile1.jpeg"} />
      </div>
      <div />
    </Layout>
  );
}

export default Home;
