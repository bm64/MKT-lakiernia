import React, { useState, useRef } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

import { CarouselProvider, Slider, Slide, WithStore } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import useWindowSize from '../hooks/useWindowSize'

import withFadeIn from '../animations/withFadeIn'

function Home() {
  const { width, height } = useWindowSize()

  return (
    <Layout>
      <div style={{ height: 'calc(100vh - 4rem' }}>
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="absolute top-0 min-h-screen object-left-top object-cover z-0"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <div className="flex flex-col items-center py-8 z-10">
            <h1 className="text-white text-center font-bold px-1 pt-10">
              Centrum <br />
              blacharsko-lakiernicze
            </h1>
            <div className="line bg-white" />
          </div>
          <div className="flex flex-col items-center z-10">
            <h2 className="text-white text-center font-bold py-5 text-black">
              Miałeś szkodę?
            </h2>
            <div className="border-2 border-orange hover:bg-white-t px-12 py-3 z-10 cursor-pointer">
              <span className="text-orange text-2xl font-bold">Zadzwoń</span>
            </div>
          </div>
          <div className="h-40 bg-white-t z-10">
            <h2 className="text-center text-black font-bold">
              Autoryzowany serwis
            </h2>
            <img
              className="h-full object-contain object-top px-8 py-6"
              src={'/logos.png'}
            />
          </div>
        </div>
      </div>

      <Header />

      <div className="bg-orange py-6">
        <h1 className="text-center font-medium">Usługi blacharskie</h1>
      </div>

      <CarouselProvider
        naturalSlideWidth={width || 400}
        naturalSlideHeight={height ? height / 1.15 : 600}
        totalSlides={3}
        dragEnabled={true}
        infinite={true}
      >
        <Slider className="w-full">
          <Slide innerClassName="flex flex-col justify-center" index={0}>
            <h1 className="section-title">Profesjonalne prace blacharskie</h1>
            <div className="line bg-orange" />
            <p className="section-text">
              Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
              urz dze i technik naprawczych; rama do napraw blacharskich
              CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
              nadwozia SPANESI TOUCH WHEELS.
            </p>
            <img src="/car_frame.jpg" className="section-img" />
          </Slide>
          <Slide innerClassName="flex flex-col justify-center" index={1}>
            <h1 className="section-title">Perfekcyjnie położony lakier</h1>
            <div className="line bg-orange" />
            <p className="section-text">
              Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
              urz dze i technik naprawczych; rama do napraw blacharskich
              CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
              nadwozia SPANESI TOUCH WHEELS.
            </p>
            <img src="/car_lacquer.jpeg" className="section-img" />
          </Slide>
          <Slide innerClassName="flex flex-col justify-center" index={2}>
            <h1 className="section-title">
              Naprawy PDR <br />
              oraz
              <br /> Auto Detailing
            </h1>
            <div className="line bg-orange" />
            <p className="section-text">
              Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
              urz dze i technik naprawczych; rama do napraw blacharskich
              CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
              nadwozia SPANESI TOUCH WHEELS.
            </p>
            <img src="/car_detailing.jpeg" className="section-img" />
          </Slide>
        </Slider>
        <CarouselSteps />
      </CarouselProvider>

      <section>
        <h1 className="section-title">Wypożyczalnia samochodów</h1>
        <div className="line bg-orange" />
        <p className="section-text">
          Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz
          dze i technik naprawczych; rama do napraw blacharskich CAR-O-LINER
          MARK 6 oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI
          TOUCH WHEELS.
        </p>
        <FadeImage src="/car_rental.jpg" className="section-img" />
      </section>

      <section>
        <h1 className="section-title">Powypadkowe badania techniczne</h1>
        <div className="line bg-orange" />
        <p className="section-text">
          Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz
          dze i technik naprawczych; rama do napraw blacharskich CAR-O-LINER
          MARK 6 oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI
          TOUCH WHEELS.
        </p>
        <FadeImage src="/car_control.jpeg" className="section-img" />
      </section>

      <section>
        <h1 className="section-title">O nas</h1>
        <div className="line bg-orange" />
        <p className="section-text">
          Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz
          dze i technik naprawczych; rama do napraw blacharskich CAR-O-LINER
          MARK 6 oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI
          TOUCH WHEELS.
        </p>
        <FadeImage src="/about_us.jpg" className="section-img" />
      </section>

      <section>
        <div className="mx-auto w-11/12 flex flex-col items-center justify-center border-2 border-orange px-2 py-8">
          <h2 className="font-bold text-center">
            <span className="text-orange">Skontaktuj</span> się
          </h2>
          <div className="line bg-orange" />
          <h3 className="font-medium py-1">Adres e-mail</h3>
          <input
            className="px-1 py-2 text-black"
            placeholder={'jan.kowalski@domena.pl'}
            type="text"
          />
          <h3 className="font-medium py-2">Treść wiadomości</h3>
          <textarea
            className="w-5/6 text-black p-2"
            style={{ minHeight: '8rem' }}
          />
          <div className="bg-orange hover:bg-orange-t border border-orange-t cursor-pointer py-4 px-16 my-4">
            <span className="text-xl text-black font-medium">
              Wyślij wiadomość
            </span>
          </div>
        </div>
      </section>

      <img src="/funding.png" className="section-img" />

      <div
        className="p-5 w-full mx-auto bg-cover"
        style={{
          backgroundImage: 'url(/footer_img1.jpeg)',
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

const FadeImage = withFadeIn(
  ({ src }) => <img src={src} className="section-img" />,
  1000
)

const CarouselSteps = WithStore(
  ({ currentSlide, totalSlides }) => {
    return (
      <div className="mx-auto flex flex-row items-center justify-center">
        {[0, 1, 2].map(i => (
          <div
            key={i.toString()}
            className={`h-1 w-12 mx-1 first:ml-0 last:mr-0 rounded-lg ${
              i === currentSlide ? 'bg-orange' : 'bg-gray'
            }`}
          />
        ))}
      </div>
    )
  },
  state => ({
    currentSlide: state.currentSlide,
    totalSlides: state.totalSlides,
  })
)

export default Home
