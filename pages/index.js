import React, { useRef } from "react";

import Layout from "../components/layout";
import Header from "../components/header";

function Home() {
  return (
    <Layout>
      <div className="h-screen">
        <div
          className="bg-cover"
          style={{ backgroundImage: "url(/mobile1.jpeg)" }}
        >
          <div className="min-h-screen-3/4 flex flex-col justify-around items-center py-16">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-center font-bold px-6">
                Autoryzowane centrum blacharsko-lakiernicze
              </h1>
              <div className="w-2/4 bg-white h-1 mb-20" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-white text-center font-bold">
                Miałeś szkodę?
              </h2>
              <div className="border-2 border-orange-400 px-12 py-3">
                <span className="text-orange-400 text-2xl font-bold">
                  Zadzwoń
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="min-h-screen-1/4 object-contain px-8"
          src={"/loga.png"}
        />
        <Header />
      </div>
    </Layout>
  );
}

export default Home;
