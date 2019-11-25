import React, { useRef } from 'react'

import Layout from '../components/layout'
import Header from '../components/header'

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
            <div className="line bg-white" />
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
          src={'/logos.png'}
        />

        <Header />
      </div>
      <h1 className="section-title">Profesjonalne prace blacharskie</h1>
      <div className="line bg-orange" />
      <p className="section-text">
        Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz dze
        i technik naprawczych; rama do napraw blacharskich CAR-O-LINER MARK 6
        oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI TOUCH
        WHEELS.
      </p>
      <img src="/car_frame.jpg" className="section-img" />

      <h1 className="section-title">Perfekcyjnie położony lakeir</h1>
      <div className="line bg-orange" />
      <p className="section-text">
        Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz dze
        i technik naprawczych; rama do napraw blacharskich CAR-O-LINER MARK 6
        oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI TOUCH
        WHEELS.
      </p>
      <img src="/car_lacquer.jpeg" className="section-img" />

      <h1 className="section-title">
        Naprawy PDR <br />
        oraz
        <br /> Auto Detailing
      </h1>
      <div className="line bg-orange" />
      <p className="section-text">
        Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz dze
        i technik naprawczych; rama do napraw blacharskich CAR-O-LINER MARK 6
        oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI TOUCH
        WHEELS.
      </p>
      <img src="/car_detailing.jpeg" className="section-img" />

      <h1 className="section-title">Wypożyczalnia samochodów</h1>
      <div className="line bg-orange" />
      <p className="section-text">
        Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz dze
        i technik naprawczych; rama do napraw blacharskich CAR-O-LINER MARK 6
        oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI TOUCH
        WHEELS.
      </p>
      <img src="/car_rental.jpg" className="section-img" />

      <h1 className="section-title">Powypadkowe badania techniczne</h1>
      <div className="line bg-orange" />
      <p className="section-text">
        Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz dze
        i technik naprawczych; rama do napraw blacharskich CAR-O-LINER MARK 6
        oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI TOUCH
        WHEELS.
      </p>
      <img src="/car_control.jpeg" className="section-img" />

      <h1 className="section-title">O nas</h1>
      <div className="line bg-orange" />
      <p className="section-text">
        Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz dze
        i technik naprawczych; rama do napraw blacharskich CAR-O-LINER MARK 6
        oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI TOUCH
        WHEELS.
      </p>
      <img src="/about_us.jpg" className="section-img" />
      <img src="/funding.png" className="section-img" />

      <div
        className="p-5 w-full flex-col bg-cover"
        style={{
          backgroundImage: 'url(/footer_img.jpeg)',
        }}
      >
        <div className="footer-item">START</div>
        <div className="footer-item">KONTAKT</div>
        <div className="footer-item ">USŁUGI</div>
        <div className="footer-item">POLITYKA PRYWATNOŚCI</div>
        <div className="footer-item">USŁUGI</div>
        <p className="text-sm text-center pt-4 text-white">
          Copyright @ 2019 MKT Serwis
        </p>
      </div>
    </Layout>
  )
}

export default Home
