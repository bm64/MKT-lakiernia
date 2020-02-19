import React, { useState, useRef } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import {
  MdPhoneIphone,
  MdLocationOn,
  MdAccessTime,
  MdMailOutline,
} from 'react-icons/md'
import {
  FaBars,
  FaCarCrash,
  FaWarehouse,
  FaUserFriends,
  FaPhone,
} from 'react-icons/fa'
import { CarouselProvider, Slider, Slide, WithStore } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import useWindowSize from '../hooks/useWindowSize'
import useMedia from '../hooks/useMedia'

import withFadeIn from '../animations/withFadeIn'

function Home() {
  const { width, height } = useWindowSize()

  const carouselHeight = useMedia(
    [
      '(min-width: 1280px)',
      '(min-width: 1024px)',
      '(min-width: 768px)',
      '(min-width: 640px)',
    ],
    [650, 1100, 1000, 750],
    650
  )

  return (
    <Layout>
      <div className="md:fixed h-screen bg-black w-56 z-10 border-r border-white">
        <div className="w-full min-h-screen-1/5 hover:bg-gray flex flex-col items-center justify-center p-2">
          <FaBars className="text-4xl" />
        </div>
        <div className="w-full min-h-screen-1/5 hover:bg-gray flex flex-col items-center justify-around p-2">
          <FaWarehouse className="text-4xl" />
          <h3 className="text-center font-medium">
            Centrum blacharsko lakiernicze
          </h3>
        </div>
        <div className="w-full min-h-screen-1/5 hover:bg-gray flex flex-col items-center justify-center p-2">
          <FaCarCrash className="text-4xl" />
          <h3 className="text-center font-medium">Likwidacja szkody</h3>
        </div>
        <div className="w-full min-h-screen-1/5 hover:bg-gray flex flex-col items-center justify-center p-2">
          <FaUserFriends className="text-4xl" />
          <h3 className="text-center font-medium">O nas</h3>
        </div>
        <div className="w-full min-h-screen-1/5 hover:bg-gray flex flex-col items-center justify-center p-2">
          <FaBars className="text-4xl" />
          <h3 className="text-center font-medium">KONTAKT</h3>
        </div>
      </div>
      <div className="min-h-screen">
        <Header />

        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="absolute top-0 min-h-screen object-left-top object-cover z-0 xl:w-full xl:h-screen"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-between relative">
          <div className="hero-content flex flex-col justify-between h-screen py-16">
            <div className="flex flex-col items-center py-8 z-10 md:py-20">
              <h1 className="text-white text-center font-bold px-1 pt-10 md:text-4xl lg:hidden">
                Centrum <br />
                blacharsko-lakiernicze
              </h1>
              <div className="line bg-white" />
            </div>
            <div className="flex flex-col items-center z-10 lg:hidden">
              <h2 className="text-white text-center font-bold py-5 text-black md:text-4xl">
                Miałeś szkodę?
              </h2>
              <div className="border-2 border-orange hover:bg-white-t px-12 py-3 z-10 cursor-pointer">
                <span className="text-orange text-2xl font-bold md:text-4xl">
                  Zadzwoń
                </span>
              </div>
            </div>
            <div class="arrow-container mx-auto lg:hidden">
              <div class="chevron md:w-20 md:h-4"></div>
              <div class="chevron md:w-20 md:h-4"></div>
              <div class="chevron md:w-20 md:h-4"></div>
            </div>
          </div>
        </div>
      </div>
      <CarouselProvider
        naturalSlideWidth={Math.min(width, 1280) || 400}
        naturalSlideHeight={carouselHeight}
        totalSlides={3}
        dragEnabled={true}
        infinite={true}
        className="container mx-auto py-4"
      >
        <Slider className="w-full py-4">
          <Slide
            innerClassName="flex flex-col xl:flex-row justify-center"
            index={0}
          >
            <div className="my-auto mx-auto max-w-3xl">
              <h1 className="section-title">Profesjonalne prace blacharskie</h1>
              <div className="line bg-orange" />
              <p className="section-text">
                Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
                urz dze i technik naprawczych; rama do napraw blacharskich
                CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
                nadwozia SPANESI TOUCH WHEELS.
              </p>
            </div>
            <img src="/car_frame.jpg" className="section-img" />
          </Slide>
          <Slide
            innerClassName="flex flex-col xl:flex-row justify-center"
            index={1}
          >
            <div className="my-auto mx-auto max-w-2xl">
              <h1 className="section-title">Perfekcyjnie położony lakier</h1>
              <div className="line bg-orange" />
              <p className="section-text">
                Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
                urz dze i technik naprawczych; rama do napraw blacharskich
                CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
                nadwozia SPANESI TOUCH WHEELS.
              </p>
            </div>
            <img src="/car_lacquer.jpeg" className="section-img max-w-3xl" />
          </Slide>
          <Slide
            innerClassName="flex flex-col xl:flex-row justify-center"
            index={2}
          >
            <div className="my-auto mx-auto max-w-3xl">
              <h1 className="section-title">Naprawy PDR oraz Auto Detailing</h1>
              <div className="line bg-orange" />
              <p className="section-text">
                Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
                urz dze i technik naprawczych; rama do napraw blacharskich
                CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
                nadwozia SPANESI TOUCH WHEELS.
              </p>
            </div>
            <img src="/car_detailing.jpeg" className="section-img max-w-3xl" />
          </Slide>
        </Slider>
        <CarouselSteps />
      </CarouselProvider>
      <section className="container mx-auto flex flex-col xl:flex-row">
        <div className="mx-auto max-w-2xl">
          <h1 className="section-title">Wypożyczalnia samochodów</h1>
          <div className="line bg-orange" />
          <p className="section-text">
            Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz
            dze i technik naprawczych; rama do napraw blacharskich CAR-O-LINER
            MARK 6 oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI
            TOUCH WHEELS.
          </p>
        </div>
        <FadeImage src="/car_rental.jpg" containerClass="my-auto xl:w-1/2" />
      </section>
      <section className="container mx-auto flex flex-col xl:flex-row">
        <div className="mx-auto max-w-2xl">
          <h1 className="section-title">Powypadkowe badania techniczne</h1>
          <div className="line bg-orange" />
          <p className="section-text">
            Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz
            dze i technik naprawczych; rama do napraw blacharskich CAR-O-LINER
            MARK 6 oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI
            TOUCH WHEELS.
          </p>
        </div>
        <FadeImage src="/car_control.jpeg" containerClass="my-auto xl:w-1/2" />
      </section>
      <section className="container mx-auto flex flex-col xl:flex-row">
        <div className="mx-auto max-w-2xl">
          <h1 className="section-title text-center">O nas</h1>
          <div className="line bg-orange" />
          <p className="section-text">
            Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych urz
            dze i technik naprawczych; rama do napraw blacharskich CAR-O-LINER
            MARK 6 oraz innowacyjny komputerowy system pomiaru nadwozia SPANESI
            TOUCH WHEELS.
          </p>
        </div>
        <FadeImage src="/about_us.jpg" containerClass="my-auto xl:w-1/2" />
      </section>
      <section className="container mx-auto flex flex-col">
        <h1 className="section-title py-4 text-center">
          Poznaj naszych wariatów
        </h1>
        <div className="flex flex-row items-center border-orange">
          <div className="flex-1">
            <h1>Bartłomiej Kula</h1>
            <h4>Kierownik Centrum Blacharsko-Lakierniczego</h4>
          </div>
          <FadeImage
            src="/bartek.jpg"
            containerClass="border-orange bg-orange shadow-xl"
          />
        </div>
        <div className="flex flex-row items-center border-b border-t border-orange">
          <FadeImage
            src="/ewa.jpg"
            containerClass="border-orange bg-orange shadow-xl"
          />
          <div className="flex-1 text-right">
            <h1>Ewa Janusz</h1>
            <h4>Asystent Centrum Blacharsko-Lakierniczego</h4>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <h1>Maciej M</h1>
            <h4>Specjalista Centrum Blacharsko-Lakierniczego</h4>
          </div>
          <FadeImage
            src="/maciej.jpg"
            containerClass="border-orange bg-orange shadow-xl"
          />
        </div>
      </section>
      <section className="container mx-auto">
        <h2 className="font-bold text-center md:text-5xl">Skontaktuj się</h2>
        <div className="line bg-orange" />
        <div className="flex flex-col xl:flex-row justify-around">
          <div
            className="px-8 py-8 flex flex-col items-stretch justify-center"
            style={{ flexBasis: 450 }}
          >
            <input
              className="block px-1 py-2 px-2 text-orange font-bold bg-black border-b border-orange"
              placeholder="Adres e-mail"
              type="text"
            />
            <textarea
              className="mt-4 p-2 text-orange font-bold bg-black border-b border-orange"
              placeholder="Tutaj wpisz treść wiadomości"
              rows={8}
            />
            <div className="mt-5 py-4 bg-orange text-center border border-orange-t hover:bg-orange-t cursor-pointer">
              <span className="text-xl text-black font-medium ">
                Wyślij wiadomość
              </span>
            </div>
          </div>
          <div className="px-8 flex flex-col justify-center items-center">
            <div className="py-4 flex flex-col flex-row items-center text-center">
              <MdPhoneIphone className="contact-icon" />
              <div>
                <h2>Telefon</h2>
                <p>
                  tel <a href="tel:175830596">17 583 05 96</a>
                  <br />
                  kom <a href="tel:602583583">602 583 583</a>
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col flex-row items-center text-center">
              <MdMailOutline className="contact-icon" />
              <div>
                <h2>E-mail</h2>
                <a href="mailto:lakiernia@mktoserwis.pl">
                  lakiernia@mktserwis.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row items-center">
          <p className="flex-1 text-left text-4xl font-medium">
            Tutaj nas znajdziesz
          </p>
          <h2>
            <span className="text-orange">Wola Mielecka 632</span> - 39-300
            Mielec
          </h2>
        </div>
        <iframe
          className="w-full mx-auto min-h-screen-1/4 md:min-h-screen-1/2"
          src="https://maps.google.com/maps?q=Wola%20mielecka%20lakiernia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <div className="flex flex-col md:flex-row md:justify-between p-5">
          <img src="/narodowa_strategia.png" className="funding-img" />
          <img src="/podkarpackie_logo.png" className="funding-img" />
          <img src="/ue_fundusz.png" className="funding-img" />
        </div>
      </section>
      <div
        className="p-5 md:p-8 w-full mx-auto bg-cover bg-right md:bg-cover md:bg-center"
        style={{
          backgroundImage: 'url(/footer_img1.jpeg)',
        }}
      >
        <div className="container mx-auto">
          <div className="footer-item">START</div>
          <div className="footer-item">KONTAKT</div>
          <div className="footer-item ">USŁUGI</div>
          <div className="footer-item">POLITYKA PRYWATNOŚCI</div>
          <div className="footer-item">USŁUGI</div>
          <p className="text-sm text-center pt-4 text-white md:text-lg">
            Copyright @ 2019 MKT Serwis
          </p>
        </div>
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
