import React, { useRef } from "react";

import Layout from "../components/layout";
import Header from "../components/header";

function Home() {
  return (
    <Layout>
      <div className="h-screen">
        <video
          autoplay="true"
          loop="true"
          playsinline="true"
          className="absolute top-0 min-h-screen-3/4 object-left-top object-cover z-0"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        <div className="min-h-screen-3/4 flex flex-col justify-around items-center py-16">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-white text-center font-bold px-3">
              Autoryzowane centrum blacharsko-lakiernicze
            </h1>
            <div className="w-2/4 bg-white h-1 mb-20" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center font-bold z-10">
              Miałeś szkodę?
            </h2>
            <div className="border-2 border-orange px-12 py-3 z-10">
              <span className="text-orange text-2xl font-bold">Zadzwoń</span>
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
