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
  FaTruck,
  FaWrench,
} from 'react-icons/fa'
import { CarouselProvider, Slider, Slide, WithStore } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import useWindowSize from '../hooks/useWindowSize'
import useMedia from '../hooks/useMedia'
import useOnEnterLeave from '../hooks/useOnEnterLeave'

import withFadeIn from '../animations/withFadeIn'

import NavSlider from 'react-slick'

const settings = {
  dots: false,
  fade: true,
  autoplay: true,
  infinite: true,
  arrows: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
}

function Home() {
  const { width, height } = useWindowSize()

  const oneRef = useRef()
  const twoRef = useRef()
  const threeRef = useRef()
  const fourRef = useRef()

  const oneVisible = useOnEnterLeave(oneRef)
  const twoVisible = useOnEnterLeave(twoRef)
  const threeVisible = useOnEnterLeave(threeRef)
  const fourVisible = useOnEnterLeave(fourRef)

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
      <div
        id="navbar"
        className="md:fixed h-screen flex flex-col items-stretch bg-black z-10 border-r border-white max-h-screen"
      >
        <h2 className="py-4 text-center font-bold ">MKT SERWIS</h2>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-around p-2 cursor-pointer">
          <FaWarehouse
            className={`${oneVisible ? 'text-orange' : ''} text-4xl`}
          />
          <h4 className="text-center font-medium">
            Centrum blacharsko lakiernicze
          </h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaCarCrash className="text-4xl" />
          <h4 className="text-center font-medium">Likwidacja szkody</h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaWrench className="text-4xl" />
          <h4 className="text-center font-medium">Usługi dodatkowe</h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaUserFriends
            className={`${
              threeVisible && !oneVisible && !twoVisible && !fourVisible
                ? 'text-orange'
                : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">O nas</h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaBars
            className={`${
              fourVisible && !oneVisible && !twoVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">Kontakt</h4>
        </div>
        <div className="flex-1" />

        <NavSlider {...settings}>
          <div className="m-0">
            <img src="skoda_biala.png" />
          </div>

          <div className="m-0">
            <img src="vw.png" />
          </div>

          <div className="m-0">
            <img src="kia_srodek.png" />
          </div>
          <div className="m-0">
            <img src="fiat.png" />
          </div>
          <div className="m-0">
            <img src="fiat_professional.png" />
          </div>
        </NavSlider>

        <div className="py-4 flex flex-col items-center">
          <h3 className="flex-1 font-medium">Kontakt</h3>
          <div className="py-2 flex flex-row items-center cursor-pointer">
            <FaPhone className="text-2xl" />
            <h5 className="px-4 text-orange">17 583 05 96</h5>
          </div>
          <div className="py-2 flex flex-row items-center cursor-pointer">
            <MdPhoneIphone className="text-2xl" />
            <h5 className="px-4 text-orange">602 583 583</h5>
          </div>
        </div>
      </div>

      <div id="content">
        <div className="min-h-screen">
          <Header />
          <div
            style={{ width: 'calc(100% - 12rem)' }}
            className="flex flex-col justify-center absolute text-left  z-10 min-h-screen w-1/2 items-center"
          >
            <div className="w-3/5 min-h-screen-3/4 ">
              <h1
                style={{ textShadow: '2px 2px 2px #1B1B1E' }}
                className="font-bold text-white  text-5xxl py-8"
              >
                MKT SERWIS
              </h1>
              <h2
                style={{ textShadow: '2px 2px 2px #1B1B1E' }}
                className="text-5xl font-medium"
              >
                Centrum blacharsko lakiernicze
              </h2>
              <div className="py-5">
                <p
                  style={{ textShadow: '1px 1px 1px #1B1B1E' }}
                  className="text-3xl text-gray"
                >
                  Kompleksowa likwidacja szkód komunikacyjnych.
                  <br />
                  Możliwość bezgotówkowego rozliczenia sprawy.
                </p>
              </div>
              <div className="flex w-full py-8">
                <button className="hero-button w-full min-h-full  mr-2 p-5 ">
                  <h1
                    style={{ textShadow: '1px 1px 1px #1B1B1E' }}
                    className="font-medium py-1"
                  >
                    Procedura likwidacji szkody
                  </h1>
                  <div
                    style={{ height: '2px', backgroundColor: '#CCCCCCDD' }}
                    className=" w-11/12 mx-auto rounded-lg"
                  ></div>
                  <p
                    style={{ textShadow: '1px 1px 1px #1B1B1E' }}
                    className="text-xl"
                  >
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz w przemyśle poligraficznym. Został po raz
                    pierwszy użyty w XV w. przez nieznanego drukarza do
                    wypełnienia tekstem
                  </p>
                </button>
                <button className="hero-button w-full min-h-full  ml-2 p-1">
                  <h1
                    style={{ textShadow: '1px 1px 1px #1B1B1E' }}
                    className="font-medium py-1"
                  >
                    Procedura likwidacji szkody
                  </h1>
                  <div
                    style={{ height: '2px', backgroundColor: '#CCCCCCDD' }}
                    className="w-11/12 mx-auto rounded-lg"
                  ></div>
                  <p
                    style={{ textShadow: '1px 1px 1px #1B1B1E' }}
                    className="text-xl"
                  >
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz w przemyśle poligraficznym. Został po raz
                    pierwszy użyty w XV w. przez nieznanego drukarza do
                    wypełnienia tekstem
                  </p>
                </button>
              </div>
            </div>
          </div>
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="min-h-screen object-cover w-full "
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div className="hidden flex flex-col justify-between relative">
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
              <div className="arrow-container mx-auto lg:hidden">
                <div className="chevron md:w-20 md:h-4"></div>
                <div className="chevron md:w-20 md:h-4"></div>
                <div className="chevron md:w-20 md:h-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div ref={oneRef}>
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
                  <h1 className="section-title">
                    Profesjonalne prace blacharskie
                  </h1>
                  <div className="line bg-orange" />
                  <p className="section-text">
                    Wykonujemy prace blacharskie z wykorzystaniem
                    specjalistycznych urz dze i technik naprawczych; rama do
                    napraw blacharskich CAR-O-LINER MARK 6 oraz innowacyjny
                    komputerowy system pomiaru nadwozia SPANESI TOUCH WHEELS.
                  </p>
                  <div className="px-8 py-4 flex flex-row items-center">
                    <FaTruck className="text-5xl text-orange" />
                    <h3 className="text-center">
                      Nasze wyposażenie umożliwia także naprawę samochodów
                      dostawczych do 3.5 ton
                    </h3>
                  </div>
                </div>
                <img
                  src="/car_frame.jpg"
                  className="section-img w-3/4 xl:max-w-3xl"
                />
              </Slide>
              <Slide
                innerClassName="flex flex-col xl:flex-row justify-center"
                index={1}
              >
                <div className="my-auto mx-auto max-w-2xl">
                  <h1 className="section-title">
                    Perfekcyjnie położony lakier
                  </h1>
                  <div className="line bg-orange" />
                  <p className="section-text">
                    Wykonujemy prace blacharskie z wykorzystaniem
                    specjalistycznych urz dze i technik naprawczych; rama do
                    napraw blacharskich CAR-O-LINER MARK 6 oraz innowacyjny
                    komputerowy system pomiaru nadwozia SPANESI TOUCH WHEELS.
                  </p>
                </div>
                <img
                  src="/car_lacquer.jpeg"
                  className="section-img w-3/4 max-w-3xl"
                />
              </Slide>
              <Slide
                innerClassName="flex flex-col xl:flex-row justify-center"
                index={2}
              >
                <div className="my-auto mx-auto max-w-3xl">
                  <h1 className="section-title">
                    Naprawy PDR oraz Auto Detailing
                  </h1>
                  <div className="line bg-orange" />
                  <p className="section-text">
                    Wykonujemy prace blacharskie z wykorzystaniem
                    specjalistycznych urz dze i technik naprawczych; rama do
                    napraw blacharskich CAR-O-LINER MARK 6 oraz innowacyjny
                    komputerowy system pomiaru nadwozia SPANESI TOUCH WHEELS.
                  </p>
                </div>
                <img
                  src="/car_detailing.jpeg"
                  className="section-img w-3/4 max-w-3xl"
                />
              </Slide>
            </Slider>
            <CarouselSteps />
          </CarouselProvider>
        </div>
        <div className="divider div-transparent div-arrow-down" />
        <section className="container mx-auto">
          <h1 className="section-title">Likwidacja szkody</h1>
          <div className="flex flex-row items-stretch">
            <div className="px-2 flex-1 flex flex-col">
              <p className="pr-6 flex-1 text-3xl">
                Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
                urz dze i technik naprawczych; rama do napraw blacharskich
                CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
                nadwozia SPANESI TOUCH WHEELS.
              </p>
              <h3 className="font-semibold text-orange">
                Za wykonane usługi udzielamy dwuletniej gwarancji
              </h3>
            </div>
            <div className="flex flex-col items-stretch">
              <div className="flex flex-row items-baseline">
                <div className="h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl">
                  1
                </div>
                <h2 className="px-2">Zgłoszenie szkody z polisy AC lub OC</h2>
              </div>

              <div className="flex flex-row items-baseline">
                <div className="mt-2 h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl">
                  2
                </div>
                <h2 className="px-2">Oględziny pojazdu</h2>
              </div>
              <div className="flex flex-row items-baseline">
                <div className="mt-2 h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl">
                  3
                </div>
                <h2 className="px-2">Ustalenie zakresu odpowiedzialności</h2>
              </div>
              <div className="flex flex-row items-baseline">
                <div className="mt-2 h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl">
                  4*
                </div>
                <h2 className="px-2">Samochód zastępczy</h2>
              </div>
              <div className="flex flex-row items-baseline">
                <div className="mt-2 h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl">
                  5
                </div>
                <h2 className="px-2">Rozliczenie koszt napraw</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="divider div-transparent div-arrow-down" />
        <section className="container mx-auto flex flex-col xl:flex-row">
          <div className="mx-auto max-w-2xl">
            <h1 className="section-title">Wypożyczalnia samochodów</h1>
            <div className="line bg-orange" />
            <p className="section-text">
              Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
              urz dze i technik naprawczych; rama do napraw blacharskich
              CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
              nadwozia SPANESI TOUCH WHEELS.
            </p>
          </div>
          <div className="mt-16 mx-auto relative w-3/4 xl:w-1/2">
            <FadeImage src="/car_rental.jpg" />
          </div>
        </section>
        <section className="container mx-auto flex flex-col xl:flex-row">
          <div className="mx-auto max-w-2xl">
            <h1 className="section-title">Powypadkowe badania techniczne</h1>
            <div className="line bg-orange" />
            <p className="section-text">
              Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
              urz dze i technik naprawczych; rama do napraw blacharskich
              CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
              nadwozia SPANESI TOUCH WHEELS.
            </p>
          </div>
          <FadeImage
            src="/car_control.jpeg"
            containerClass="m-auto w-3/4 xl:w-1/2"
          />
        </section>
        <div className="divider div-transparent div-arrow-down" />
        <section className="container mx-auto flex flex-col xl:flex-row">
          <div className="mx-auto max-w-2xl">
            <h1 className="section-title text-center">O nas</h1>
            <div className="line bg-orange" />
            <p className="section-text">
              Wykonujemy prace blacharskie z wykorzystaniem specjalistycznych
              urz dze i technik naprawczych; rama do napraw blacharskich
              CAR-O-LINER MARK 6 oraz innowacyjny komputerowy system pomiaru
              nadwozia SPANESI TOUCH WHEELS.
            </p>
          </div>
          <FadeImage
            src="/about_us.jpg"
            containerClass="m-auto w-3/4 xl:w-1/2"
          />
        </section>
        <section ref={threeRef} className="container mx-auto flex flex-col">
          <h1 className="section-title pt-2 text-left font-semibold text-orange">
            Poznaj naszych pracowników
          </h1>
          <div className="flex flex-row items-center border-t border-orange">
            <div className="flex-1">
              <h1>Bartłomiej Kula</h1>
              <h4>Kierownik Centrum Blacharsko-Lakierniczego</h4>
            </div>
            <FadeImage src="/bartek.jpg" containerClass="bg-orange shadow-xl" />
          </div>
          <div className="flex flex-row items-center my-8 lg:my-0 lg:border-b lg:border-t lg:border-orange">
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
              <h1>Maciej Kotwica</h1>
              <h4>Specjalista Centrum Blacharsko-Lakierniczego</h4>
            </div>
            <FadeImage
              src="/maciej.jpg"
              containerClass="border-orange bg-orange shadow-xl"
            />
          </div>
        </section>
        <div className="divider2 donotcross" />
        <section ref={fourRef} className="container mx-auto">
          <h2 className="font-bold text-center md:text-5xl">Skontaktuj się</h2>
          <div className="line bg-orange" />
          <div className="flex flex-col xl:flex-row justify-around">
            <div
              className="px-8 py-8 flex flex-col items-stretch justify-center"
              style={{ flexBasis: 450 }}
            >
              <input
                className="block px-1 py-2 px-2 text-white font-bold bg-black border border-orange"
                placeholder="Adres e-mail"
                type="text"
              />
              <textarea
                className="mt-4 p-2 text-white font-bold bg-black border border-orange"
                placeholder="Tutaj wpisz treść wiadomości"
                rows={8}
              />
              <div className="mt-5 py-4 bg-orange text-center border border-orange-t hover:bg-orange-t cursor-pointer">
                <span className="text-xl text-black font-medium ">
                  Wyślij wiadomość
                </span>
              </div>
            </div>
            <div className="px-8 flex flex-row xl:flex-col justify-between xl:justify-center items-stretch">
              <div className="py-4 flex flex-row items-center text-center">
                <div className="flex-1 text-left">
                  <h2>Telefon</h2>
                  <p>
                    tel <a href="tel:175830596">17 583 05 96</a>
                    <br />
                    kom <a href="tel:602583583">602 583 583</a>
                  </p>
                </div>
                <MdPhoneIphone className="contact-icon" />
              </div>
              <div className="py-4 flex flex-row items-center text-center">
                <div className="flex-1 text-left">
                  <h2>E-mail</h2>
                  <a href="mailto:lakiernia@mktoserwis.pl">
                    lakiernia@mktserwis.pl
                  </a>
                </div>
                <MdMailOutline className="contact-icon" />
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="flex flex-row items-center">
            <h3 className="flex-1 text-left md:text-3xl font-medium">
              Tutaj nas znajdziesz
            </h3>
            <h4>
              <span className="text-orange">Wola Mielecka 632</span> - 39-300
              Mielec
            </h4>
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
        <div className="p-5 md:p-8 w-full mx-auto bg-cover bg-right md:bg-cover md:bg-center">
          <div className="container mx-auto">
            <div className="footer-item">START</div>
            <div className="footer-item">KONTAKT</div>
            <div className="footer-item ">USŁUGI</div>
            <div className="footer-item">POLITYKA PRYWATNOŚCI</div>
            <div className="footer-item">USŁUGI</div>
            <p className="text-sm text-center pt-4 text-white md:text-lg">
              Copyright @ 2020 MKT Serwis
            </p>
          </div>
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
