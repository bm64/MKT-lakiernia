import React, { useRef } from "react";

import Layout from "../components/layout";
import Header from "../components/header";

function Home() {
  return (
    <Layout>
      <div>
        <div
          className="bg-cover"
          style={{ backgroundImage: "url(/mobile1.jpeg)" }}
        >
          <div className="min-h-screen-3/4 flex flex-col justify-center items-center">
            <h2 className="text-white text-center text-3xl font-bold px-6">
              Autoryzowane centrum blacharsko-lakiernicze
            </h2>
            <div className="w-2/4 bg-white h-1 mb-20" />
            <h3 className="text-white text-center text-3xl font-bold">
              Miałeś szkodę?
            </h3>
            <div className="border-2 border-orange-400 px-12 py-3">
              <span className="text-orange-400 text-2xl font-bold">
                Zadzwoń
              </span>
            </div>
          </div>
        </div>
        <Header />
      </div>
    </Layout>
  );
}

export default Home;
