import React, { useState, useRef } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import {
  MdPhoneIphone,
  MdLocationOn,
  MdAccessTime,
  MdMailOutline,
} from 'react-icons/md'

import { CarouselProvider, Slider, Slide, WithStore } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import useWindowSize from '../hooks/useWindowSize'

import withFadeIn from '../animations/withFadeIn'

function Home() {
  const { width, height } = useWindowSize()

  return (
    <Layout>
      <div className="h-screen">
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="absolute top-0 min-h-screen object-left-top object-cover z-0"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-between">
          <div className="hero-content">
            <div className="flex flex-col items-center py-8 z-10 md:py-20">
              <h1 className="text-white text-center font-bold px-1 pt-10 md:text-4xl">
                Centrum <br />
                blacharsko-lakiernicze
              </h1>
              <div className="line bg-white" />
            </div>
            <div className="flex flex-col items-center z-10">
              <h2 className="text-white text-center font-bold py-5 text-black md:text-4xl">
                Miałeś szkodę?
              </h2>
              <div className="border-2 border-orange hover:bg-white-t px-12 py-3 z-10 cursor-pointer">
                <span className="text-orange text-2xl font-bold md:text-4xl">
                  Zadzwoń
                </span>
              </div>
            </div>
          </div>
          <div class="arrow-container mx-auto ">
            <div class="chevron md:w-20 md:h-4"></div>
            <div class="chevron md:w-20 md:h-4"></div>
            <div class="chevron md:w-20 md:h-4"></div>
          </div>
        </div>
      </div>
      <Header />

      <div className="bg-white border-t-4 border-b-4  border-orange  h-auto">
        <h1 className="text-center text-black font-bold mt-2 md:text-4xl">
          Autoryzowany serwis
        </h1>
        <img
          className=" m-auto object-contain object-top px-8 py-6 md:p-8"
          src={'/logos.png'}
        />
      </div>

      {/*<div className="bg-orange py-6">
        <h1 className="text-center font-medium">Usługi blacharskie</h1>
  </div>*/}

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
        <h1 className="section-title text-center">O nas</h1>
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
          <h2 className="font-bold text-center md:text-5xl">
            <span className="text-orange">Skontaktuj</span> się
          </h2>
          <div className="line bg-orange" />
          <h3 className="font-medium  md:text-3xl md:mb-5">Adres e-mail</h3>
          <input
            className="w-5/6 px-1 py-2 text-black "
            placeholder={'jan.kowalski@domena.pl'}
            type="text"
          />
          <h3 className="font-medium  md:text-3xl md:m-5">Treść wiadomości</h3>
          <textarea
            className="w-5/6 text-black p-2"
            style={{ minHeight: '8rem' }}
          />
          <div className="bg-orange hover:bg-orange-t border border-orange-t cursor-pointer py-4  w-3/4 text-center my-5">
            <span className="text-xl text-black font-medium ">
              Wyślij wiadomość
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-left   p-5 flex-wrap md:justify-left">
          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <div>
              <h2>Adres:</h2>
              <p>
                Wola Mielecka 632
                <br />
                39-300 Mielec
              </p>
            </div>
          </div>
          <div className="contact-item">
            <MdPhoneIphone className="contact-icon" />
            <div>
              <h2>Telefon:</h2>

              <p>
                tel 17 583 05 96
                <br />
                kom 602 583 583
              </p>
            </div>
          </div>
          <div className="contact-item">
            <MdAccessTime className="contact-icon" />
            <div>
              <h2>Godziny otwarcia</h2>
              <p>
                pn.-pt. 7:00 - 15:00
                <br />
                sob. 7:00 - 14:00
              </p>
            </div>
          </div>
          <div className="contact-item">
            <MdMailOutline className="contact-icon" />
            <div>
              <h2>E-mail</h2>
              <p>lakiernia@mktserwis.pl</p>
            </div>
          </div>
        </div>

        <iframe
          className="w-full mx-auto px-5  min-h-screen-1/4"
          src="https://maps.google.com/maps?q=Wola%20mielecka%20lakiernia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <div className="flex flex-row flex-wrap px-5">
          <img src="/narodowa_strategia.png" className="funding-img" />
          <img src="/podkarpackie_logo.png" className="funding-img" />
          <img src="/ue_fundusz.png" className="funding-img" />
        </div>
      </section>
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
