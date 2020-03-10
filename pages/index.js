import React, { useState, useRef, useEffect } from 'react'
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
  FaChevronRight,
} from 'react-icons/fa'
import { CarouselProvider, Slider, Slide, WithStore } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import useWindowSize from '../hooks/useWindowSize'
import useMedia from '../hooks/useMedia'
import useOnEnterLeave from '../hooks/useOnEnterLeave'

import withFadeIn from '../animations/withFadeIn'

import NavSlider from 'react-slick'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

const settings = {
  dots: false,
  fade: true,
  autoplay: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
}

function Home() {
  const { width, height } = useWindowSize()

  const oneRef = useRef()
  const twoRef = useRef()
  const threeRef = useRef()
  const fourRef = useRef()
  const fiveRef = useRef()

  const oneVisible = useOnEnterLeave(oneRef)
  const twoVisible = useOnEnterLeave(twoRef)
  const threeVisible = useOnEnterLeave(threeRef)
  const fourVisible = useOnEnterLeave(fourRef)
  const fiveVisible = useOnEnterLeave(fiveRef)

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
  const [sectionImg, setSectionImg] = useState('/car_polish2.jpeg')

  const { scrollYProgress } = useViewportScroll()

  const stepOne = useRef()
  const stepTwo = useRef()
  const stepThree = useRef()
  const stepFour = useRef()

  const x = useTransform(scrollYProgress, [0.2, 0.3], [-300, 0])

  return (
    <Layout>
      <div
        id="navbar"
        className="md:fixed h-screen flex flex-col flex-between items-stretch bg-black2 z-30 max-h-screen"
      >
        <h2 className="py-4 text-center font-bold ">MKT SERWIS</h2>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-around p-2 cursor-pointer">
          <FaWarehouse
            className={`${
              oneVisible && !twoVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">
            Centrum blacharsko lakiernicze
          </h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaCarCrash
            className={`${
              twoVisible && !threeVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">Likwidacja szkody</h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaWrench
            className={`${
              threeVisible && !fourVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">Usługi dodatkowe</h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaUserFriends
            className={`${
              fourVisible && !fiveVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">O nas</h4>
        </div>
        <div className="py-4 hover:bg-gray flex flex-col items-center justify-center p-2 cursor-pointer">
          <FaBars className={`${fiveVisible ? 'text-orange' : ''} text-4xl`} />

          <h4 className="text-center font-medium">Kontakt</h4>
        </div>

        <div className="flex-1"></div>
        <NavSlider {...settings} className="w-2/3 mx-auto py-2">
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
        <div className="flex-1"></div>

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
        <div className="relative z-20 min-h-screen bg-black mb-64">
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

          <section ref={oneRef} className="panels">
            <div className="flex flex-row mx-auto min-h-screen-9/10">
              <div className="relative flex flex-col justify-end min-h-full w-1/2 bg-cover bg-center  overflow-hidden">
                <div
                  style={{
                    backgroundImage: 'url(/car_painting.jpeg)',
                  }}
                  className="transform h-full w-full bg-center bg-cover hover:scale-110 duration-2500"
                ></div>
                <div className="absolute left-0 bottom-0 w-full section-item p-10 pl-12 pr-5">
                  <h2 className="font-semibold">
                    Profesjonalne narzędzia lakiernicze
                  </h2>
                  <div
                    style={{ height: '0.15rem' }}
                    className="w-10 bg-orange mt-2 mb-3"
                  ></div>
                  <h5 className="text-gray font-medium">
                    Własny mieszalnik cromax pro na bazie wody
                  </h5>
                  <h5 className="text-gray font-medium">
                    Pistolety SATA oraz IWATA
                  </h5>
                </div>
              </div>
              <div className="flex flex-col min-h-full w-3/5 pl-6 ">
                <div
                  className="relative flex flex-col justify-end min-h-1/2 w-full bg-cover bg-bottom
              bg-no-repeat overflow-hidden"
                >
                  <div
                    style={{
                      backgroundImage: 'url(/mark6.jpg)',
                    }}
                    className="transform h-full w-full bg-bottom bg-cover hover:scale-110 duration-2500"
                  ></div>

                  <div className="absolute left-0 bottom-0 w-full section-item p-10 pl-12 pr-5">
                    <h2 className="font-semibold">CAR-O-LINER MARK 6</h2>
                    <div
                      style={{ height: '0.15rem' }}
                      className="w-10 bg-orange mt-2 mb-3"
                    ></div>
                    <h5 className="text-gray font-medium">
                      Umożliwiający naprawę samochodów
                      <h5> dostawczych o wadze do 3.5t</h5>
                    </h5>
                  </div>
                </div>
                <div className="flex flex-row min-h-1/2 w-full pt-6">
                  <div className="relative flex flex-col justify-end min-h-1/2 w-1/2 bg-cover bg-center mr-3 overflow-hidden">
                    <div
                      style={{
                        backgroundImage: 'url(/spectrofotometr.jpg)',
                      }}
                      className="transform h-full w-full bg-bottom bg-cover hover:scale-110 duration-2500"
                    ></div>

                    <div className="absolute w-full left-0 bottom-0 section-item p-10 pr-5 pl-12">
                      <h2 className="font-semibold">Spectrofotometr Cromax</h2>
                      <div
                        style={{ height: '0.15rem' }}
                        className="w-10 bg-orange mt-2 mb-3"
                      ></div>
                      <h5 className="text-gray font-medium">
                        Nowy poziom dopasowania koloru ze spektrofotometrem
                        ChromaVision Pro
                      </h5>
                    </div>
                  </div>
                  <div className="relative flex flex-col justify-end min-h-full w-1/2 bg-cover bg-no-repeat ml-3 bg-center overflow-hidden">
                    <div
                      style={{
                        backgroundImage: 'url(/nova_verta.jpg)',
                      }}
                      className="transform h-full w-full bg-bottom bg-cover hover:scale-110 duration-2500"
                    ></div>

                    <div className="absolute w-full bot-0 left-0 section-item pb-10 pt-10 pr-5 pl-12">
                      <h2 className="font-semibold">Kabina Nova Verta</h2>
                      <div
                        style={{ height: '0.15rem' }}
                        className="w-10 bg-orange mt-2 mb-3"
                      ></div>
                      <h5 className="text-gray font-medium">
                        Kabiny lakiernicze przystosowane do procesów
                        lakierniczych
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={twoRef} className="container mx-auto">
            <h1 className="section-title text-left py-2">Miałeś szkodę?</h1>
            <h1 className="text-right font-medium py-4">
              Tutaj dowiesz się jak wygląda proces likwidacji
            </h1>
            <div className="flex flex-col items-stretch">
              <Step index={1} title={'Zgłoszenie szkody z polisy AC lub OC'}>
                Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie szkody
                z polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step index={2} title="Oględziny pojazdu" reversed>
                Drugim krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step index={3} title={'Ustalenie zakresu odpowiedzialności'}>
                Trzecim krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step index={'4'} title="Samochód zastępczy" reversed>
                Czwartym krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step index={5} title="Rozliczanie koszt napraw">
                Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>
            </div>
          </section>

          <section ref={threeRef}>
            <div
              style={{ backgroundImage: `url(${sectionImg})` }}
              className="absolute w-full min-h-screen-3/4 bg-cover bg-center bg-no-repeat "
            ></div>
            <div className="relative flex flex-col items-end h-full w-full min-h-screen-3/4 bg-cover ">
              <div className="flex-1" />
              <div className="flex flex-row h-full w-full">
                <div
                  onClick={() => setSectionImg('/car_polish3.jpeg')}
                  className="flex flex-col justify-center bg-black-t w-1/3 min-h-full px-5 py-4 hover:bg-black"
                >
                  <div className="flex justify-start items-center">
                    <FaChevronRight className="text-orange text-3xl pr-3" />
                    <h1 className="text-white text-2xl text-center font-semibold w-9/12 leading-tight">
                      WYPOŻYCZALNIA SAMOCHODÓW
                    </h1>
                  </div>
                  <h5 className="pl-8 pt-2 text-white font-medium w-4/6">
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz
                  </h5>
                </div>
                <div
                  onClick={() => setSectionImg('/car_polish4.jpeg')}
                  className="flex flex-col justify-center bg-black-t w-1/3 min-h-full px-5 py-4 hover:bg-black"
                >
                  <div className="flex justify-start items-center">
                    <FaChevronRight className="text-orange text-3xl pr-3" />
                    <h1 className="text-white text-2xl text-center font-semibold w-9/12 leading-tight">
                      POWYPADKOWE BADANIA TECHNICZNE
                    </h1>
                  </div>
                  <h5 className="pl-8 pt-2 text-white font-medium w-4/6">
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz
                  </h5>
                </div>
                <div
                  onClick={() => setSectionImg('/car_polish5.jpeg')}
                  className="flex flex-col justify-center bg-black-t w-1/3 min-h-full px-5 py-4 hover:bg-black"
                >
                  <div className="flex justify-start items-center">
                    <FaChevronRight className="text-orange text-3xl pr-3" />
                    <h1 className="text-white text-2xl text-center font-semibold w-9/12 leading-tight p-2">
                      NAPRAWY PDR
                    </h1>
                  </div>
                  <h5 className="pl-8 pt-2 text-white font-medium w-4/6">
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz
                  </h5>
                </div>
              </div>
            </div>
          </section>

          <section ref={fourRef} className="container mx-auto flex flex-col">
            <h1 className="section-title pt-2 text-left font-semibold text-orange">
              Poznaj naszych pracowników
            </h1>
            <div className="flex flex-row items-center border-t border-orange">
              <div className="flex-1">
                <h1>Bartłomiej Kula</h1>
                <h4>Kierownik Centrum Blacharsko-Lakierniczego</h4>
              </div>
              <FadeImage
                src="/bartek.jpg"
                containerClass="bg-orange shadow-xl"
              />
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

          <div className="flex flex-row w-8/12 mx-auto">
            <div className="flex-1 flex-col px-2">
              <div className="relative ">
                <div
                  style={{
                    backgroundImage: 'url(/bartek.jpg)',
                    height: '25rem',
                  }}
                  className="w-full h-full bg-cover bg-no-repeat"
                ></div>
                <div className="absolute bottom-0 left-0 section-item w-full px-8 py-5">
                  <h2 className="font-medium">Bartłomiej Kula</h2>
                  <h5 className="font-normal pt-1">
                    Kierownik Centrum Blacharsko-Lakierniczego
                  </h5>
                  <h5 className="font-normal pt-1 text-orange">
                    +48 17 583 05 97
                  </h5>
                  <h5 className="font-normal pt-1 text-orange">
                    b.kula@mktserwis.pl
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col px-2">
              <div className="relative ">
                <div
                  style={{
                    backgroundImage: 'url(/Maciej.jpg)',
                    height: '25rem',
                  }}
                  className="w-full h-full bg-cover bg-no-repeat"
                ></div>
                <div className="absolute bottom-0 left-0 section-item w-full px-8 py-5">
                  <h2 className="font-medium">Bartłomiej Kula</h2>
                  <h5 className="font-normal pt-1">
                    Kierownik Centrum Blacharsko-Lakierniczego
                  </h5>
                  <h5 className="font-normal pt-1 text-orange">
                    +48 17 583 05 97
                  </h5>
                  <h5 className="font-normal pt-1 text-orange">
                    b.kula@mktserwis.pl
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col px-2">
              <div className="relative ">
                <div
                  style={{
                    backgroundImage: 'url(/ewa.jpg)',
                    height: '25rem',
                  }}
                  className="w-full h-full bg-cover bg-no-repeat"
                ></div>
                <div className="absolute bottom-0 left-0 section-item w-full px-8 py-5">
                  <h2 className="font-medium">Bartłomiej Kula</h2>
                  <h5 className="font-normal pt-1">
                    Kierownik Centrum Blacharsko-Lakierniczego
                  </h5>
                  <h5 className="font-normal pt-1 text-orange">
                    +48 17 583 05 97
                  </h5>
                  <h5 className="font-normal pt-1 text-orange">
                    b.kula@mktserwis.pl
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <section ref={fiveRef} className="container mx-auto">
            <h2 className="font-bold text-center md:text-5xl">
              Skontaktuj się
            </h2>
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
        </div>
        <footer
          className="fixed bottom-0 h-64 w-full text-center bg-black2"
          style={{ width: 'calc(100vw - 12rem)' }}
        >
          <div
            className="absolute mx-auto"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h1 className="font-bold">MKT-SERWIS</h1>
            <h4 className="font-medium text-gray">@2020</h4>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

function Step({ index, title, reversed = false, children }) {
  const ref = useRef()

  const [h, setH] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    if (ref.current) {
      setY(ref.current.getBoundingClientRect().top)
      setH(ref.current.getBoundingClientRect().height)
    }
  }, [ref])

  const { scrollY } = useViewportScroll()

  const x = useTransform(
    scrollY,
    [y + 300, y + 1700],
    reversed ? [600, 0] : [-600, 0]
  )

  return (
    <>
      <motion.div
        ref={ref}
        style={{ x }}
        transition={{ type: 'spring', mass: 0.3, stiffness: 10 }}
        className={`${reversed ? 'self-end' : ''} flex flex-row items-baseline`}
      >
        <div
          className={`${
            reversed ? 'self-end' : ''
          } h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl`}
        >
          {index}
        </div>
        <h2 className="px-4">{title}</h2>
      </motion.div>
      <motion.p
        className={`${reversed ? 'self-end' : ''} font-medium text-2xl p-4`}
        style={{ x, maxWidth: '46rem' }}
      >
        {children}
      </motion.p>

      <motion.div
        style={{ x }}
        className={`${
          reversed ? 'self-end' : ''
        } h-1 w-4/6 bg-black2 rounded-sm`}
      />
    </>
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
