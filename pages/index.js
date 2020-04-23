import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import { MdPhoneIphone, MdUpdate } from 'react-icons/md'
import {
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaBars,
  FaCarCrash,
  FaWarehouse,
  FaUserFriends,
  FaPhone,
  FaWrench,
  FaTools,
  FaHandshake,
  FaThumbsUp,
  FaCalendarCheck,
  FaEnvelope,
  FaMobile,
  FaMobileAlt,
  FaMicrophoneAlt,
  FaUserCheck,
  FaUserTie,
  FaCheck,
} from 'react-icons/fa'

import useWindowSize from '../hooks/useWindowSize'
import useOnEnterLeave from '../hooks/useOnEnterLeave'

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

function Home() {
  const oneRef = useRef()
  const twoRef = useRef()
  const threeRef = useRef()
  const fourRef = useRef()
  const fiveRef = useRef()
  const sixRef = useRef()

  const oneScrollRef = useRef()
  const twoScrollRef = useRef()
  const threeScrollRef = useRef()
  const fourScrollRef = useRef()
  const fiveScrollRef = useRef()
  const sixScrollRef = useRef()
  const sevenScrollRef = useRef()

  const oneVisible = useOnEnterLeave(oneRef)
  const twoVisible = useOnEnterLeave(twoRef)
  const threeVisible = useOnEnterLeave(threeRef)
  const fourVisible = useOnEnterLeave(fourRef)
  const fiveVisible = useOnEnterLeave(fiveRef)
  const sixVisible = useOnEnterLeave(sixRef)

  const [showFooter, setShowFooter] = useState(false)
  const { scrollY } = useViewportScroll()

  const [blur, setBlur] = useState(0)

  useEffect(() => {
    scrollY.onChange(() => {
      const value = scrollY.get()

      if (value > 6000) setBlur(6)
      else if (value > 5500) setBlur(4)
      else if (value > 4900) setBlur(2)
      else if (value > 4200) setBlur(1)
      else setBlur(0)

      setShowFooter(value > 3000) // Arbitrary number really
    })
  }, [])

  const oxx = useTransform(scrollY, [700, 2700], [0, -150])
  const oxx2 = useTransform(scrollY, [1500, 4000], [50, -200])
  const ox = useSpring(oxx)
  const ox2 = useSpring(oxx2)

  const scrollToRef = (ref) =>
    window.scrollTo(
      0,
      window.pageYOffset + ref.current.getBoundingClientRect().top - 32
    )

  return (
    <Layout>
      <div
        id="navbar"
        className="md:fixed h-screen  flex flex-col flex-between items-stretch bg-black2 z-30 max-h-screen"
      >
        <h2
          onClick={() => scrollToRef(oneScrollRef)}
          className={`${
            sixVisible && !oneVisible ? 'text-orange ' : ''
          }   text-center navbar-heading w-full font-bold py-2 mx-auto cursor-pointer transform duration-500 hover:text-orange hover:bg-black-t`}
        >
          MKT SERWIS
        </h2>
        <div className="flex flex-col h-full flex-1" style={{ flexBasis: 0 }}>
          <div
            onClick={() => scrollToRef(twoScrollRef)}
            className={`${
              oneVisible && !twoVisible ? 'bg-black-t' : ''
            } navbar-item`}
          >
            <FaWarehouse
              className={`${
                oneVisible && !twoVisible ? 'text-orange ' : ''
              } text-4xl`}
            />
            <h4
              className={`${
                oneVisible && !twoVisible ? 'text-orange' : ''
              } text-center font-medium px-2 pt-1`}
            >
              Usługi lakiernicze
            </h4>
          </div>
          <div
            onClick={() => scrollToRef(threeScrollRef)}
            className={`${
              twoVisible && !threeVisible ? 'bg-black-t' : ''
            } navbar-item`}
          >
            <FaCarCrash
              className={`${
                twoVisible && !threeVisible ? 'text-orange' : ''
              } text-4xl`}
            />
            <h4
              className={`${
                twoVisible && !threeVisible ? 'text-orange' : ''
              } text-center font-medium px-2 pt-1`}
            >
              Likwidacja szkody
            </h4>
          </div>
          <div
            onClick={() => scrollToRef(fourScrollRef)}
            className={`${
              threeVisible && !fourVisible ? 'bg-black-t' : ''
            } navbar-item`}
          >
            <FaWrench
              className={`${
                threeVisible && !fourVisible ? 'text-orange' : ''
              } text-4xl`}
            />
            <h4
              className={`${
                threeVisible && !fourVisible ? 'text-orange' : ''
              } text-center font-medium px-2 pt-1`}
            >
              Usługi dodatkowe
            </h4>
          </div>
          <div
            onClick={() => scrollToRef(fiveScrollRef)}
            className={`${
              fourVisible && !fiveVisible ? 'bg-black-t' : ''
            } navbar-item`}
          >
            <FaUserFriends
              className={`${
                fourVisible && !fiveVisible ? 'text-orange' : ''
              } text-4xl`}
            />
            <h4
              className={`${
                fourVisible && !fiveVisible ? 'text-orange' : ''
              } text-center font-medium px-2 pt-1`}
            >
              O nas
            </h4>
          </div>
          <div
            onClick={() => scrollToRef(sixScrollRef)}
            className={`${fiveVisible ? 'bg-black-t' : ''} navbar-item`}
          >
            <FaBars
              className={`${fiveVisible ? 'text-orange ' : ''} text-4xl`}
            />
            <h4
              className={`${
                fiveVisible ? 'text-orange ' : ''
              } text-center font-medium px-2 pt-1`}
            >
              Kontakt
            </h4>
          </div>
          {/*
          <div className="navbar-item">
            <FaRegCalendarAlt
              className={`${fiveVisible ? 'text-orange' : ''} text-4xl`}
            />
            <h4 className="text-center font-medium px-2 pt-1">
              Zarezerwuj termin
            </h4>
          </div>*/}
        </div>

        <div className=" flex flex-col items-center">
          <h3 className="flex-1 font-medium text-white mx-auto text-center pb-2">
            Zadzwoń do nas!
          </h3>
          <div className="py-2 flex flex-row items-center cursor-pointer">
            <FaPhone
              className="text-2xl text-orange"
              style={{ transform: 'scaleX(-1)' }}
            />
            <h5 className="px-4 text-white font-semibold ">17 583 05 96</h5>
          </div>
          <div className="py-2 flex flex-row items-center cursor-pointer">
            <MdPhoneIphone className="text-2xl text-orange " />
            <h5 className="px-4 text-white-white font-semibold">602 583 583</h5>
          </div>
        </div>
      </div>

      <div id="content">
        <div ref={oneScrollRef} className="bg-black mb-64">
          <div ref={sixRef} className="relative z-20">
            <video
              autoPlay={true}
              loop={true}
              playsInline={true}
              className="fixed top-0 left-0 h-screen object-cover w-full"
              style={{ maxHeight: '90rem' }}
              muted
            >
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className="relative h-screen bg-transparent z-30"
            style={{ maxHeight: '90rem' }}
          >
            <div
              className="absolute flex flex-col  px-8 py-2"
              style={{
                top: '18%',
                left: '7%',

                backgroundColor: 'rgba(27,27,29, .7)',
              }}
            >
              <h2
                className="font-bold text-4xxl leading-tight py-2 "
                style={{ letterSpacing: '0.2em' }}
              >
                MKT SERWIS
              </h2>
              <h1 className="font-semibold text-6xl whitespace-no-wrap leading-tight pt-2">
                CENTRUM
              </h1>
              <h1 className="font-semibold text-6xl whitespace-no-wrap leading-none pb-3">
                BLACHARSKO LAKIERNICZE
              </h1>

              <h4 className="font-regular text-xl py-3 max-w-4xl  ">
                Kompleksowa obsługa szkód komunikacyjnych. Możliwość
                bezgotówkowego rozliczenia sprawy. Kompleksowa obsługa szkód
                komunikacyjnych.
              </h4>
              <div className="flex flex-row">
                <div
                  onClick={() => scrollToRef(sevenScrollRef)}
                  className="text-2xl bg-black2 py-3 px-5 font-medium my-5 transform duration-300 hover:bg-orange hover:text-black"
                >
                  Zobacz więcej
                </div>
                <div></div>
              </div>
            </div>
            <a
              className="ca3-scroll-down-link ca3-scroll-down-arrow absolute"
              data-ca3_iconfont="ETmodules"
              data-ca3_icon=""
            ></a>
            <div
              className="absolute bottom-0 left-0 h-40 w-full"
              style={{
                background:
                  '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0,  #1b1b1e 90%,  #1b1b1e 100%)',
              }}
            />
          </div>

          <div className="relative bg-black z-30">
            <section className="container mx-auto">
              <h2
                ref={sevenScrollRef}
                className="inline-block px-12 py-4  mb-8 bg-orange font-semibold text-black2"
              >
                TO NAS WYRÓŻNIA
              </h2>
              <h2 className="text-gray font-medium text-left">
                ZAPEWNIAMY NAJWYŻSZĄ JAKOŚĆ USŁUG
              </h2>
              <h1 className="text-4xl  leading-tight max-w-2xl pb-8 pt-4">
                Good design is like a refrigerator — when it works, no one
                notices, but when it doesn’t, it sure stinks.
              </h1>

              <div className="container overflow-hidden grid grid-cols-2 lg:grid-cols-4 mx-auto">
                <GalleryItem title="Szybka realizacja" image="/gallery1.jpg">
                  <FaCalendarCheck className="gallery-item" />
                </GalleryItem>
                <GalleryItem title="Profesjonalny sprzęt" image="/gallery2.jpg">
                  <FaTools className="gallery-item" />
                </GalleryItem>
                <GalleryItem title="Doskonała obsluga" image="/gallery3.jpg">
                  <FaCheck className="gallery-item" />
                </GalleryItem>
                <GalleryItem title="Zadowoleni klienici" image="/gallery4.jpg">
                  <FaThumbsUp className="gallery-item" />
                </GalleryItem>
              </div>
              <div
                style={{ height: '2px' }}
                className="bg-gray mx-auto w-24 mt-16"
              />
              <h1 className="text-5xl font-medium leading-tight  w-full text-center pt-12 pb-4">
                AUTORYZOWANY SERWIS
              </h1>
              <h2 className="text-gray  text-center   max-w-4xl pb-16 mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </h2>
              <div className="z-20 bg-black container mx-auto flex flex-row justify-around">
                <img src="skoda_biala.png" className="h-24 lg:h-32 xl:h-48" />
                <img src="vw.png" className="h-24 lg:h-32 xl:h-48" />
                <img src="kia_srodek.png" className="h-24 lg:h-32 xl:h-48" />
                <img src="fiat.png" className="h-24 lg:h-32 xl:h-48" />
                <img
                  src="fiat_professional.png"
                  className="h-24 lg:h-32 xl:h-48"
                />
              </div>
            </section>

            <section ref={oneRef} className="relative mx-auto">
              <div
                className="absolute top-0 left-0 h-40 w-full z-10"
                style={{
                  background:
                    '-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0,  #1B1B1E 90%,  #1B1B1E 100%)',
                }}
              />

              <div
                className="absolute bottom-0 left-0 h-40 w-full z-10"
                style={{
                  background:
                    '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0,  #1b1b1e 90%,  #1b1b1e 100%)',
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'url(/bg_img10.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  /*
                clipPath:
                  'polygon(89% 0, 0 36%, 0 66%, 89% 100%, 100% 100%, 100% 86%, 39% 57%, 39% 41%, 100% 12%, 100% 0)',
                */
                }}
              />

              <motion.div className="container mx-auto pt-20">
                {/*
              <h1 className="px-2 font-semibold text-5xl transform leading-tight tracking-wide">
                Projesjonalne
              </h1>
              <h3 className="font-normal text-5xl text-orange transform translate-x-10 leading-tight tracking-tight">
                usługi lakiernicze
              </h3>
              */}
                <h2
                  ref={twoScrollRef}
                  className="relative inline-block px-10 py-4 bg-orange font-semibold text-black2 z-10"
                >
                  PROFESJONALNE USŁUGI LAKIERNICZE
                </h2>
                <div className="py-8 panels-grid grid grid-cols-4 gap-4">
                  <Panel
                    className="row-span-4 col-span-4 lg:col-span-2"
                    title="Profesjonalne narzędzia lakiernicze"
                    image="/car_painting.jpg"
                  >
                    Własny mieszalnik cromax pro na bazie wody
                    <br />
                    Pistolety SATA oraz IWATA
                  </Panel>
                  <Panel
                    className="col-span-4 row-span-2 lg:col-span-2"
                    title="CAR-O-LINER MARK 6"
                    image="/mark6.jpg"
                  >
                    Umożliwiający naprawę samochodów dostawczych o wadze do 3.5t
                  </Panel>
                  <Panel
                    className="col-span-2 row-span-2 lg:col-span-1"
                    title="Spectrofotometr CROMAX"
                    image="/spectrofotometr.jpg"
                  >
                    Nowy poziom dopasowania koloru ze spektrofotometrem
                  </Panel>
                  <Panel
                    className="col-span-2 row-span-2 lg:col-span-1"
                    title="Kabina Nova Verta"
                    image="/kabina.jpg"
                  >
                    Kabiny lakiernicze przystosowane do procesów lakierniczych
                  </Panel>
                  <Panel
                    className="col-span-4 row-span-2"
                    title="CROMAX"
                    image="/puszki.jpg"
                  >
                    Kabiny lakiernicze przystosowane do procesów lakierniczych
                  </Panel>
                </div>
              </motion.div>
            </section>

            <section className="mt-4 relative">
              <div
                ref={twoRef}
                className="absolute top-0 left-0 w-full h-full"
                style={
                  {
                    /*
                backgroundImage: 'url(/drying.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: '0',

                clipPath: 'polygon(7% 1%, 30% 1%, 30% 97%, 7% 97%)',
                */
                  }
                }
              />
              <motion.div
                //style={{ y: ox2 }}
                className="container mx-auto transform"
              >
                {/*
              <h1 className="inline px-6 py-2 text-5xl text-black text-left font-medium bg-white">
                MIAŁEŚ SZKODĘ?
              </h1>*/}

                <h2
                  ref={threeScrollRef}
                  className="inline-block px-12 py-4  mb-8 bg-orange font-semibold text-black2"
                >
                  ZOBACZ JAK WYGLĄDA PROCES LIKWIDACJI SZKODY
                </h2>
                <div className="flex flex-col items-stretch overflow-hidden shadow-inner">
                  <Step
                    index={1}
                    title="Zgłoszenie szkody z polisy AC lub OC"
                    image="l1.png"
                  >
                    Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..
                  </Step>

                  <Step
                    index={2}
                    title="Oględziny pojazdu"
                    image="l2.png"
                    reversed
                  >
                    Drugim krokiem jaki powinienes podjąć jest zgłoszenie szkody
                    z polisy AC lub OC do..Pierwszym krokiem jaki powinienes
                    podjąć jest zgłoszenie szkody z polisy AC lub OC do..
                  </Step>
                  <Step
                    index={3}
                    title={'Ustalenie zakresu odpowiedzialności'}
                    image="l3.png"
                  >
                    Trzecim krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..
                  </Step>

                  <Step
                    index={4}
                    title="Samochód zastępczy"
                    image="l4.png"
                    reversed
                  >
                    Czwartym krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..
                  </Step>

                  <Step
                    index={5}
                    title="Rozliczanie koszt napraw"
                    image="l5.png"
                    className="mb-0"
                  >
                    Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..
                  </Step>
                </div>
                <h1 className="py-4 px-8 font-semibold text-white bg-black2 shadow transform">
                  <span className="float-right text-orange">
                    +48 123 456 789
                  </span>
                  UMÓW SIĘ NA OGLĘDZINY JUŻ DZIŚ
                </h1>
              </motion.div>
            </section>
            <section ref={threeRef} className="container mx-auto bg-black">
              <h2
                ref={fourScrollRef}
                className="inline-block px-12 py-4  mb-8 bg-orange font-semibold text-black2"
              >
                USŁUGI DODATKOWE
              </h2>

              <div
                style={{
                  backgroundImage: 'url(/services1.jpg)',
                  backgroundSize: 'cover',
                  minHeight: '35rem',
                }}
                className="background w-full relative rounded-sm"
              >
                <div
                  style={{ backgroundColor: 'rgba(27,27,30,.7)' }}
                  className=" absolute top-0 right-0  transform -translate-x-16 translate-y-16"
                >
                  <h1 className="px-8 pt-5  font-medium text-white text-3xl text-center">
                    NAPRAWY PDR
                  </h1>
                  <p className="p-5 pt-2 text-center text-xl font- leading-tight max-w-xl">
                    Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: 'url(/services2.jpg)',
                  backgroundSize: 'cover',
                  minHeight: '35rem',
                }}
                className="background w-full relative rounded-sm"
              >
                <div
                  style={{ backgroundColor: 'rgba(27,27,30,.7)' }}
                  className=" absolute top-0 left-0  transform translate-x-16 translate-y-16"
                >
                  <h1 className="px-8 pt-5  font-medium text-white text-3xl text-center">
                    AUTO DETAILING
                  </h1>
                  <p className="p-5 pt-2 text-center text-xl font- leading-tight max-w-xl">
                    Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: 'url(/services3.jpg)',
                  backgroundSize: 'cover',
                  minHeight: '35rem',
                }}
                className="background w-full relative rounded-sm"
              >
                <div
                  style={{ backgroundColor: 'rgba(27,27,30,.7)' }}
                  className=" absolute top-0 right-0  transform -translate-x-16 translate-y-16"
                >
                  <h1 className="px-8 pt-5  font-medium text-white text-3xl text-center">
                    WYPOŻYCZALNIA SAMOCHODÓW
                  </h1>
                  <p className="p-5 pt-2 text-center text-xl font- leading-tight max-w-xl">
                    Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: 'url(/services4.jpg)',
                  backgroundSize: 'cover',
                  minHeight: '35rem',
                  transform: 'scaleX(-1)',
                }}
                className="background w-full relative rounded-sm"
              >
                <div
                  style={{
                    backgroundColor: 'rgba(27,27,30,.7)',
                    transform: 'scaleX(-1) translateY(4rem) translateX(4rem)',
                  }}
                  className=" absolute top-0 right-0  "
                >
                  <h1 className="px-8 pt-5  font-medium text-white text-3xl text-center max-w-xl leading-snug">
                    POWYPADKOWE BADANIA TECHNICZNE
                  </h1>
                  <p className="p-5 pt-2 text-center text-xl font- leading-tight max-w-xl">
                    Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                    powinienes podjąć jest zgłoszenie szkody z polisy AC lub OC
                    do..Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie
                    szkody z polisy AC lub OC do..
                  </p>
                </div>
              </div>
            </section>

            <section ref={fourRef} className="relative mx-auto about-us ">
              <div
                className="absolute top-0 left-0 h-24 w-full z-10"
                style={{
                  background:
                    '-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0,  #1B1B1E 90%,  #1B1B1E 100%)',
                }}
              />

              <div
                className="absolute bottom-0 left-0 h-24 w-full z-10"
                style={{
                  background:
                    '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0,  #1b1b1e 90%,  #1b1b1e 100%)',
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-full bg-no-repeat"
                style={{
                  backgroundImage: 'url(/lakiernia.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'left',
                  backgroundAttachment: 'fixed',
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{ backgroundColor: 'rgba(17,18,18, 0.7)' }}
              />

              <div className="relative container overflow-hidden gap-8 grid grid-cols-4 grid-rows-2 mx-auto py-32">
                <div
                  ref={fiveScrollRef}
                  style={{ transform: 'none' }}
                  className="about-us-item col-span-4 row-span-2 lg:col-span-2 flex-col items-start justify-between px-12"
                >
                  <div className="flex flex-col items-start w-full">
                    <h1 className="text-gray font-medium text-left">
                      O NASZEJ FIRMIE
                    </h1>
                    <h1 className="text-5xl font-medium leading-tight pt-2">
                      Czym się <br />
                      zajmujemy?
                    </h1>
                    <div
                      style={{ height: '2px' }}
                      className="about-us-line bg-orange w-full my-6"
                    />
                    <h4 className="text-lg text-gray text-left font-medium">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit
                    </h4>
                  </div>
                  <img src="lakiernia_nowa.jpg" className="rounded-lg" />
                </div>
                <div className="about-us-item col-span-2 row-span-1 lg:col-span-1 pt-6">
                  <h1 className="text-left text-orange font-semibold text-5xl leading-snug px-5 my-auto ">
                    POZNAJ NASZ ZESPÓŁ
                  </h1>
                </div>
                <div className="about-us-item col-span-2 row-span-1 lg:col-span-1">
                  <img src="/bartek1.png" className="w-24" />
                  <h2 className="pt-2 pb-1 font-medium">Bartłomiej Kula</h2>
                  <p className="text-center text-gray text-sm font-medium pb-1 leading-tight">
                    KIEROWNIK CETRUM BLACHARSKO-LAKIERNICZEGO
                  </p>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-2 mb-4"
                  />
                  <div className="flex flex-row items-center py-1">
                    <FaPhone
                      style={{ transform: 'scaleX(-1)' }}
                      className="font-sm"
                    />
                    <p className="pl-2 font-medium text-base">
                      +48 17 583 05 97
                    </p>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <FaMobileAlt className="font-sm" />
                    <p className="pl-2 font-medium">+48 795 570 800</p>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <FaEnvelope className="font-sm" />
                    <p className="pl-2 font-medium">b.kula@mktserwis.pl</p>
                  </div>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray mt-4 w-9/12"
                  />
                </div>
                <div className="about-us-item col-span-2 row-span-1 lg:col-span-1">
                  <img src="/ewa_bg.png" className="w-24" />
                  <h2 className="pt-2 pb-1 font-medium">Ewa Janusz</h2>
                  <p className="text-center text-gray text-sm font-medium pb-1 leading-tight">
                    KIEROWNIK CETRUM BLACHARSKO-LAKIERNICZEGO
                  </p>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-2 mb-4"
                  />
                  <div className="flex flex-row items-center py-1">
                    <FaPhone
                      style={{ transform: 'scaleX(-1)' }}
                      className="font-sm"
                    />
                    <p className="pl-2 font-medium">+48 17 583 05 97</p>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <FaMobileAlt className="font-sm" />
                    <p className="pl-2 font-medium">+48 795 570 800</p>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <FaEnvelope className="font-sm" />
                    <p className="pl-2 font-medium">b.kula@mktserwis.pl</p>
                  </div>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-4"
                  />
                </div>
                <div className="about-us-item col-span-2 row-span-1 lg:col-span-1">
                  <img src="/maciej1.png" className="w-24" />
                  <h2 className="pt-2 pb-1 font-medium">Maciej Kotwica</h2>
                  <p className="text-center text-gray text-sm font-medium pb-1 leading-tight">
                    KIEROWNIK CETRUM BLACHARSKO-LAKIERNICZEGO
                  </p>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-2 mb-4"
                  />
                  <div className="flex flex-row items-center py-1">
                    <FaPhone
                      style={{ transform: 'scaleX(-1)' }}
                      className="font-sm"
                    />
                    <p className="pl-2 font-medium">+48 17 583 05 97</p>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <FaMobileAlt className="font-sm" />
                    <p className="pl-2 font-medium">+48 795 570 800</p>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <FaEnvelope className="font-sm" />
                    <p className="pl-2 font-medium">b.kula@mktserwis.pl</p>
                  </div>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-4"
                  />
                </div>
              </div>
            </section>
            <section className="container mx-auto">
              <div
                ref={fiveRef}
                className="flex flex-col md:flex-row justify-center"
              >
                <div
                  onClick={() => scrollToRef(sixScrollRef)}
                  className="relative shadow-md transform translate-x-10"
                  style={{
                    backgroundImage: 'url(car3.jpeg)',
                    backgroundSize: 'cover',
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.9)',
                  }}
                >
                  <h2
                    ref={sixScrollRef}
                    style={{
                      boxShadow: '10px 10px 10px rgba(0,0,0,0.9)',
                    }}
                    className="absolute top-0 left-0 px-12 py-4 bg-orange text-black2 font-semibold transform -translate-y-12"
                  >
                    SKONTAKTUJ SIĘ Z NAMI
                  </h2>
                  <div className="pl-16 pr-40 py-16 h-full bg-black-t">
                    <h1 className="font-semibold">Potrzebujesz pomocy?</h1>
                    <p className="p-4 font-medium text-lg max-w-sm text-white">
                      Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie
                      szkody z polisy AC lub OC do..Pierwszym krokiem jaki
                      powinienes podjąć jest zgłoszenie szkody z polisy AC lub
                      OC do..
                    </p>
                    <div className="flex flex-row items-center py-1 pt-8 ">
                      <FaPhone
                        className="text-orange text-xl mr-3"
                        style={{ transform: 'scaleX(-1)' }}
                      />
                      <h3 className="text-white font-medium">
                        +48 17 583 05 96
                      </h3>
                    </div>
                    <div className="flex flex-row items-center py-1 ">
                      <FaMobileAlt className="text-orange text-xl mr-3" />
                      <h3 className=" text-white font-medium">
                        +48 17 583 05 96
                      </h3>
                    </div>
                    <div className="flex flex-row items-center py-1 ">
                      <FaEnvelope className="text-orange text-xl mr-3" />
                      <h3 className=" text-white font-medium">
                        lakiernia@mktserwis.pl
                      </h3>
                    </div>
                    <div className="flex flex-row items-top py-1 ">
                      <FaMapMarkedAlt className="text-orange text-xl mr-3 mt-1" />
                      <h3 className=" text-white font-medium">
                        Wola Mielecka 632
                        <br />
                        39-300 Mielec
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="px-20 pb-10 pt-6 flex flex-col items-stretch justify-center bg-black2 transform -translate-x-10 translate-y-20 shadow-lg"
                  style={{
                    flexBasis: 550,

                    boxShadow: '-10px 10px 10px rgba(0,0,0,0.9)',
                  }}
                >
                  <h1 className="font-semibold text-center pb-4">
                    Napisz do nas!
                  </h1>
                  <input
                    className="block px-1 py-2 px-2 text-white font-bold bg-black border border-orange"
                    placeholder="Twoje imię"
                    type="text"
                  />
                  <input
                    className="mt-4 block px-1 py-2 px-2 text-white font-bold bg-black border border-orange"
                    placeholder="Adres e-mail"
                    type="text"
                  />
                  <textarea
                    className="mt-4 p-2 text-white font-bold bg-black border border-orange"
                    placeholder="Tutaj wpisz treść wiadomości"
                    rows={8}
                  />
                  <div className="mt-5 py-4 bg-orange text-center border border-orange-t hover:bg-orange-t cursor-pointer">
                    <span className="text-xl text-black font-semibold">
                      Wyślij wiadomość
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section
              style={{ paddingTop: '10rem' }}
              className="container mx-auto"
            >
              <div className="flex flex-row items-center">
                <h2 className="inline-block px-12 py-4 mb-8  bg-orange font-semibold text-black2">
                  TUTAJ NAS ZNAJDZIESZ
                </h2>
                <h4 className="flex-1 text-right">
                  <span className="text-orange">Wola Mielecka 632 </span>
                  <br />
                  39-300 Mielec
                </h4>
              </div>
              <iframe
                className="w-full mx-auto min-h-screen-1/4 md:min-h-screen-1/2"
                src="https://maps.google.com/maps?q=MKT%20SERWIS%20CENTRUM%20BLACHARSKO%20LAKIERNICZE%20WOLA%20MIELECKA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </section>
          </div>
        </div>

        {showFooter && (
          <footer
            className="fixed bottom-0 h-64 w-full text-center  bg-black2 z-20"
            style={{ width: 'calc(100vw - 12rem)' }}
          >
            <div className="continer mx-auto flex-col items-start justify-between ">
              <div className="flex flex-row container justify-around mx-auto">
                <img className="h-24" src="/narodowa_strategia.png" />
                <img className="h-24" src="/podkarpackie_logo.png" />
                <img className="h-24" src="/ue_fundusz.png" />
              </div>

              <div>
                <h1 className="font-bold text-center">MKT-SERWIS </h1>
                <h4 className="font-medium text-gray text-center">@2020</h4>
              </div>
            </div>
          </footer>
        )}
      </div>
    </Layout>
  )
}

function GalleryItem({ image, title, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        paddingTop: '125%',
      }}
      className="relative overflow-hidden bg-contain bg-no-repeat hover:scale-105 transform  duration-300"
    >
      <div className="gallery-effect h-full w-full absolute left-0 bottom-0 cursor-pointer" />
      <div
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        className="absolute w-full text-center p-5 pointer-events-none"
      >
        <div className="font-medium text-2xl py-1">{title}</div>
        {children}
      </div>
    </div>
  )
}

function Panel({ className = '', title, image, children }) {
  return (
    <div className={`relative overflow-hidden rounded ${className}`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          transitionDuration: '1000ms',
          boxShadow: '-10px 10px 10px rgba(0,0,0,0.9)',
        }}
        className="transform h-full w-full bg-center bg-cover hover:scale-110"
      />
      <div
        className="absolute left-0 bottom-0 w-full p-4 pointer-events-none"
        style={{
          background:
            '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, black 60%, black 100%)',
        }}
      >
        <h2 className="py-2 font-semibold">{title}</h2>
        <div className="w-12 h-1 bg-orange" />
        <h5 className="py-2 font-medium">{children}</h5>
      </div>
    </div>
  )
}

function Step({
  index,
  className = '',
  title,
  reversed = false,
  image,
  children,
}) {
  const { width, height } = useWindowSize()

  const [h, setH] = useState(0)
  const [y, setY] = useState(0)

  const measureStep = useCallback((ref) => {
    if (ref !== null) {
      setY(ref.getBoundingClientRect().top + window.scrollY)
      setH(ref.getBoundingClientRect().height)
    }
  }, [])

  const { scrollY } = useViewportScroll()

  const rx = useTransform(
    scrollY,
    [y - height - h, y - height + h * 2],
    reversed ? [1500, 0] : [-1500, 0]
  )

  const x = useSpring(rx, { mass: 0.3 })

  const opacity = useTransform(x, reversed ? [600, 0] : [-600, 0], [0, 1])

  return (
    <div
      ref={measureStep}
      className={`relative w-full px-4 py-12 mb-4 flex flex-row rounded ${className}`}
      style={{
        alignSelf: reversed ? 'flex-end' : 'flex-start',
        backgroundImage: `url(/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {reversed && (
        <div
          className="self-end arrow"
          style={{ transform: 'scaleX(-1) translateX(14rem)' }}
        >
          <div className="curve" />
          <div className="point" />
        </div>
      )}
      <div
        className={`flex flex-col ${
          reversed ? 'items-end' : 'items-start'
        } w-full`}
      >
        <motion.div
          style={{
            justifyContent: reversed ? 'flex-end' : 'flex-start',
            x,
            opacity,
            backgroundColor: '#333333',
          }}
          transition={{ type: 'spring', mass: 5, stiffness: 10 }}
          className="flex flex-row items-baseline"
        >
          <div
            className="h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl"
            style={reversed ? { order: 2 } : {}}
          >
            {index}
          </div>
          <h2 className="px-4 inline">{title}</h2>
        </motion.div>
        <motion.p
          className={`font-medium text-2xl py-4 px-2 bg-black-t ${
            reversed ? 'text-right' : ''
          }`}
          style={{ x, opacity, maxWidth: '46rem' }}
        >
          {children}
        </motion.p>
      </div>
      {!reversed && index !== 5 && (
        <div className="self-end arrow transform translate-x-32 translate-y-16">
          <div className="curve" />
          <div className="point" />
        </div>
      )}
    </div>
  )
}

export default Home
