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
  FaDog,
} from 'react-icons/fa'

import useWindowSize from '../hooks/useWindowSize'
import useOnEnterLeave from '../hooks/useOnEnterLeave'
import useMedia from '../hooks/useMedia'

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

  const reversed = useMedia(
    ['(min-width: 1000px)', '(min-width: 400px)'],
    [true, false]
  )

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
      <div className="fixed top-0 left-0 bg-black2 w-full flex flex-row justify-between items-center z-50 lg:hidden px-2 py-3">
        <h1 className="font-semibold text-3xl">MKT SERWIS</h1>
        <div className="flex flex-row">
          <FaMobileAlt className="text-3xl mr-3" />
          <FaBars className="text-3xl ml-3" />
        </div>
      </div>
      <div
        id="navbar"
        className="hidden fixed h-screen  lg:flex flex-col flex-between items-stretch bg-black2 z-30 max-h-screen"
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
        <div
          ref={oneScrollRef}
          className="bg-black"
          style={{ marginBottom: '26rem' }}
        >
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
              className="absolute top-0 left-0 h-screen w-full"
              style={{
                backgroundColor: 'rgba(27,27,29, .7)',
              }}
            />
            <div className="relative container lg:hidden pt-24 z-50">
              <h1 className="text-white text-4xxl font-semibold pl-5 leading-snug">
                CENTRUM <br /> BLACHARSKO LAKIERNICZE
              </h1>
              <h2 className="text-gray font-medium   py-3 max-w-4xl px-5  ">
                Kompleksowa obsługa szkód komunikacyjnych.
              </h2>
              <button
                onClick={() => scrollToRef(sevenScrollRef)}
                className="block text-center px-2 text-2xl  bg-black2 py-3 px-3 font-semibold cursor-pointer mx-auto transform duration-300 hover:bg-orange hover:text-black"
              >
                ZOBACZ WIĘCEJ
              </button>
            </div>
            <div className="hidden lg:block transform  lg:translate-x-32 lg:translate-y-32">
              <h2
                className=" lg:block text-3xl lg:text-4xxl font-bold  leading-tight py-2"
                style={{ letterSpacing: '0.2em' }}
              >
                MKT SERWIS
              </h2>
              <h1 className=" font-semibold text-6xl whitespace-no-wrap leading-tight pt-2">
                CENTRUM
              </h1>
              <h1 className="  font-semibold text-6xl  whitespace-no-wrap leading-none pb-3">
                BLACHARSKO <br className="lg:hidden" /> LAKIERNICZE
              </h1>

              <h2 className="  font-white font-regular  py-3 max-w-4xl  ">
                Kompleksowa obsługa szkód komunikacyjnych. Możliwość
                bezgotówkowego rozliczenia sprawy. Kompleksowa obsługa szkód
                komunikacyjnych.
              </h2>
              <div className="flex flex-row">
                <div
                  onClick={() => scrollToRef(sevenScrollRef)}
                  className="text-2xl bg-black2 py-3 px-5 font-semibold my-5 cursor-pointer transform duration-300 hover:bg-orange hover:text-black"
                >
                  ZOBACZ WIĘCEJ
                </div>
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
            <section className="container mx-auto flex flex-col items-start lg:items-start lg:text-left">
              <h2
                ref={sevenScrollRef}
                className="heading text-xl lg:text-2xl text-gray lg:text-black2 lg:bg-orange px-4 lg:px-10 pt-2 pb-0 lg:py-4  mb-4 lg:mb-8"
              >
                TO NAS WYRÓŻNIA
              </h2>
              <h2 className="hidden lg:block text-gray text- font-regular text-left leading-tight lg:leading-normal lg:text-left">
                ZAPEWNIAMY NAJWYŻSZĄ JAKOŚĆ USŁUG
              </h2>
              <h1 className="text-3xl lg:text-4xl font-regular lg:font-medium leading-tight  max-w-2xl px-4 lg:px-0 pb-6 lg:pb-8 lg:pt-4">
                Good design is like a refrigerator — when it works, no one
                notices, but when it doesn’t, it sure stinks.
              </h1>

              <div className="container overflow-hidden grid grid-cols-2 lg:grid-cols-4 mx-auto">
                <GalleryItem title="Szybka realizacja" image="/gallery1.jpg">
                  <FaCalendarCheck className="gallery-item hidden lg:block" />
                </GalleryItem>
                <GalleryItem title="Profesjonalny sprzęt" image="/gallery2.jpg">
                  <FaTools className="gallery-item hidden lg:block" />
                </GalleryItem>
                <GalleryItem title="Doskonała obsluga" image="/gallery3.jpg">
                  <FaCheck className="gallery-item hidden lg:block" />
                </GalleryItem>
                <GalleryItem title="Zadowoleni klienici" image="/gallery4.jpg">
                  <FaThumbsUp className="gallery-item hidden lg:block" />
                </GalleryItem>
              </div>
              <div
                style={{ height: '2px' }}
                className="hidden lg:block bg-gray mx-auto w-24 mt-8 lg:mt-16"
              />
              <h1 className="text-white lg:text-white text-2xl lg:text-4xxl font-medium lg:font-medium leading-tight w-full text-center px-1 lg:px-0 pt-0 pt-8 lg:pt-12  lg:pb-4">
                AUTORYZOWANY SERWIS
              </h1>
              <h2 className="hidden lg:block text-gray  text-center font-regular   max-w-4xl pb-16 mx-auto leading-tight">
                Przedsiębiorstwo MKT Serwis oferuje Państwu profesjonalne
                naprawy blacharsko lakiernicze nadwozi samochodów wszystkich
                marek
              </h2>
              <div
                style={{ height: '2px' }}
                className=" lg:hidden bg-gray mx-auto w-16 my-5 "
              />
              <div className="z-20 bg-black container mx-auto flex flex-row justify-around px-2">
                <img src="skoda_biala.png" className="h-16 lg:h-32 xl:h-48" />
                <img src="vw.png" className="h-16 lg:h-32 xl:h-48" />
                <img src="kia_srodek.png" className="h-16 lg:h-32 xl:h-48" />
                <img src="fiat.png" className="h-16 lg:h-32 xl:h-48" />
                <img
                  src="fiat_professional.png"
                  className="h-16 lg:h-32 xl:h-48"
                />
              </div>
            </section>

            <section ref={oneRef} className="relative mx-auto">
              <div
                className="absolute top-0 left-0 h-40 w-full z-10"
                style={{
                  transform: 'translateY(-1px)',
                  background:
                    '-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0,  #1B1B1E 90%,  rgba(27,27,30,1) )',
                }}
              />

              <div
                className="absolute bottom-0 left-0 h-40 w-full z-10"
                style={{
                  transform: 'translateY(1px)',
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

              <motion.div className="container mx-auto pt-10 pb-12 lg:pt-20">
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
                  className="relative heading text-xl lg:text-2xl text-gray lg:text-black2 lg:bg-orange px-4 lg:px-10 lg:pt-2 lg:py-4  mb-4 lg:mb-8 z-10"
                >
                  PROFESJONALNE USŁUGI LAKIERNICZE
                </h2>
                <div className="relative z-10 panels-grid grid grid-cols-4 gap-1 lg:gap-4">
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
                  className="heading text-xl lg:text-2xl text-gray lg:text-black2 lg:bg-orange px-4 lg:px-10 pt-2 pb-0 lg:py-4  mb-4 lg:mb-8"
                >
                  ZOBACZ JAK WYGLĄDA <br className="md:hidden" />
                  PROCES LIKWIDACJI SZKODY
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
                    reversed={reversed}
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
                    reversed={reversed}
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
                <h1 className="text-xl w-full lg:text-3xl py-4 px-4 lg:px-8 font-semibold text-white bg-black2 shadow transform">
                  UMÓW SIĘ NA OGLĘDZINY TERAZ{' '}
                  <span className="inline-block lg:float-right text-orange">
                    <br className="  hidden" /> +48 123 456 789
                  </span>
                </h1>
              </motion.div>
            </section>
            <section
              ref={threeRef}
              className="hidden lg:block container mx-auto bg-black"
            >
              <h2
                ref={fourScrollRef}
                className="heading text-xl lg:text-2xl text-gray lg:text-black2 lg:bg-orange px-4 lg:px-10 pt-2 pb-0 lg:py-4  mb-4 lg:mb-8"
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
                  <h1 className="px-4 lg:px-8 pt-5  font-medium text-white text-3xl text-center">
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
                className="absolute hidden lg:block top-0 left-0 h-24 w-full z-10"
                style={{
                  transform: 'translateY(-1px)',
                  background:
                    '-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0,  #1B1B1E 90%,  #1B1B1E 100%)',
                }}
              />

              <div
                className="absolute hidden lg:block bottom-0 left-0 h-24 w-full z-10"
                style={{
                  transform: 'translateY(1px)',
                  background:
                    '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0,  #1b1b1e 90%,  #1b1b1e 100%)',
                }}
              />
              <div
                className="absolute hidden lg:block top-0 left-0 w-full h-full bg-no-repeat"
                style={{
                  backgroundImage: 'url(/lakiernia.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                  backgroundAttachment: 'fixed',
                }}
              />
              <div className="absolute lg:hidden bg-black top-0 left-0 w-full h-full" />
              <div
                className="absolute hidden lg:block top-0 left-0 w-full h-full"
                style={{ backgroundColor: 'rgba(17,18,18, 0.7)' }}
              />

              <div className="relative z-10 container overflow-hidden gap-2 lg:gap-8 grid grid-cols-4 grid-rows-2 mx-auto lg:py-24 px-3 lg:px-0">
                <div
                  ref={fiveScrollRef}
                  style={{ transform: 'none' }}
                  className="about-us-item col-span-4 row-span-2 lg:col-span-2 flex-col items-start justify-between px-4 lg:px-12"
                >
                  <div className="flex flex-col items-start w-full">
                    <h1 className="text-base leading-tight lg:leading-normal lg:text-2xl text-gray font-medium text-left">
                      O NASZEJ FIRMIE{' '}
                    </h1>
                    <h1 className="text-3xl lg:text-5xl font-medium leading-tight lg:pt-2">
                      Czym się <br />
                      zajmujemy?
                    </h1>
                    <div
                      style={{ height: '2px' }}
                      className="about-us-line bg-orange w-full my-2 lg:my-6"
                    />
                    <h4 className="text-sm lg:text-lg text-gray text-left font-medium leading-tight lg:leading-normal pb-2 lg:pb-0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                      <span className="hidden lg:block">
                        {' '}
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit
                      </span>
                    </h4>
                  </div>
                  <img src="lakiernia_nowa.jpg" className="rounded-lg" />
                </div>
                <div className="about-us-item col-span-2 row-span-1 lg:col-span-1 pt-6">
                  <h1 className="text-left  text-orange font-semibold text-3xl lg:text-5xl leading-snug lg:px-5 my-auto pb-8">
                    POZNAJ NASZ ZESPÓŁ
                  </h1>
                </div>
                <div className="about-us-item col-span-2 row-span-1 px-1 lg:px-4 lg:col-span-1">
                  <img src="/bartek1.png" className="w-16 lg:w-24" />
                  <h2 className="text-lg lg:text-2xl pt-1 lg:pt-2 pb-1 font-medium">
                    Bartłomiej Kula
                  </h2>
                  <p className="text-xs lg:text-sm text-center text-gray font-medium lg:pb-1 leading-tight lg:leading-normal">
                    KIEROWNIK CETRUM BLACHARSKO-LAKIERNICZEGO
                  </p>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-2 mb-1 lg:mb-4"
                  />
                  <div className="flex flex-row items-center pb-1  lg:py-1">
                    <FaPhone
                      style={{ transform: 'scaleX(-1)' }}
                      className="text-xs lg:text-base"
                    />
                    <p className="text-xs lg:text-base pl-1  lg:pl-2 font-medium">
                      +48 17 583 05 97
                    </p>
                  </div>
                  <div className="flex flex-row items-center pb-1 lg:py-1">
                    <FaMobileAlt className="text-xs lg:text-base" />
                    <p className="text-xs lg:text-base pl-1 lg:pl-2 font-medium ">
                      +48 795 570 800
                    </p>
                  </div>
                  <div className="flex flex-row items-center lg:py-1">
                    <FaEnvelope className="text-xs lg:text-base" />
                    <p className="text-xs lg:text-base pl-2 font-medium">
                      b.kula@mktserwis.pl
                    </p>
                  </div>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray mt-1 lg:mt-4 w-9/12"
                  />
                </div>
                <div className="about-us-item col-span-2 row-span-1 px-1 lg:px-4 lg:col-span-1">
                  <img src="/ewa_bg.png" className="w-16 lg:w-24" />
                  <h2 className="text-lg lg:text-2xl pt-1 lg:pt-2 pb-1 font-medium">
                    Ewa Janusz
                  </h2>
                  <p className="text-xs lg:text-sm text-center text-gray font-medium lg:pb-1 leading-tight lg:leading-normal">
                    KIEROWNIK CETRUM BLACHARSKO-LAKIERNICZEGO
                  </p>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-2 mb-1 lg:mb-4"
                  />
                  <div className="flex flex-row items-center pb-1  lg:py-1">
                    <FaPhone
                      style={{ transform: 'scaleX(-1)' }}
                      className="text-xs lg:text-base"
                    />
                    <p className="text-xs lg:text-base pl-1  lg:pl-2 font-medium">
                      +48 17 583 05 97
                    </p>
                  </div>
                  <div className="flex flex-row items-center pb-1 lg:py-1">
                    <FaMobileAlt className="text-xs lg:text-base" />
                    <p className="text-xs lg:text-base pl-1 lg:pl-2 font-medium ">
                      +48 795 570 800
                    </p>
                  </div>
                  <div className="flex flex-row items-center lg:py-1">
                    <FaEnvelope className="text-xs lg:text-base" />
                    <p className="text-xs lg:text-base pl-2 font-medium">
                      b.kula@mktserwis.pl
                    </p>
                  </div>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray mt-1 lg:mt-4 w-9/12"
                  />
                </div>
                <div className="about-us-item col-span-2 row-span-1 px-1 lg:px-4 lg:col-span-1">
                  <img src="/maciej1.png" className="w-16 lg:w-24" />
                  <h2 className="text-lg lg:text-2xl pt-1 lg:pt-2 pb-1 font-medium">
                    Maciej Kotwica
                  </h2>
                  <p className="text-xs lg:text-sm text-center text-gray font-medium lg:pb-1 leading-tight lg:leading-normal">
                    KIEROWNIK CETRUM BLACHARSKO-LAKIERNICZEGO
                  </p>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray w-9/12 mt-2 mb-1 lg:mb-4"
                  />
                  <div className="flex flex-row items-center pb-1  lg:py-1">
                    <FaPhone
                      style={{ transform: 'scaleX(-1)' }}
                      className="text-xs lg:text-base"
                    />
                    <p className="text-xs lg:text-base pl-1  lg:pl-2 font-medium">
                      +48 17 583 05 97
                    </p>
                  </div>
                  <div className="flex flex-row items-center pb-1 lg:py-1">
                    <FaMobileAlt className="text-xs lg:text-base" />
                    <p className="text-xs lg:text-base pl-1 lg:pl-2 font-medium ">
                      +48 795 570 800
                    </p>
                  </div>
                  <div className="flex flex-row items-center lg:py-1">
                    <FaEnvelope className="text-xs lg:text-base" />
                    <p className="text-xs lg:text-base pl-2 font-medium">
                      b.kula@mktserwis.pl
                    </p>
                  </div>
                  <div
                    style={{ height: '2px' }}
                    className="about-us-line bg-gray mt-1 lg:mt-4 w-9/12"
                  />
                </div>
              </div>
            </section>
            <section className="hidden lg:block container mx-auto">
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
                    className="heading absolute bg-orange top-0 left-0 px-10 py-4 transform -translate-y-12"
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
                        className="text-white text-xl mr-3"
                        style={{ transform: 'scaleX(-1)' }}
                      />
                      <h3 className="text-white font-medium">
                        +48 17 583 05 96
                      </h3>
                    </div>
                    <div className="flex flex-row items-center py-1 ">
                      <FaMobileAlt className="text-white text-xl mr-3" />
                      <h3 className=" text-white font-medium">
                        +48 17 583 05 96
                      </h3>
                    </div>
                    <div className="flex flex-row items-center py-1 ">
                      <FaEnvelope className="text-white text-xl mr-3" />
                      <h3 className=" text-white font-medium">
                        lakiernia@mktserwis.pl
                      </h3>
                    </div>
                    <div className="flex flex-row items-top py-1 ">
                      <FaMapMarkedAlt className="text-white text-xl mr-3 mt-1" />
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

            <section className="container mx-auto pb-0">
              <div className="flex flex-col lg:flex-row items-start lg:items-center">
                <h2 className="heading text-xl lg:text-2xl leading-tight lg:leading-normal text-gray lg:text-black2 lg:bg-orange px-4 lg:px-10 pt-2 pb-0 lg:py-4  lg:mb-4 lg:mb-8">
                  TUTAJ NAS ZNAJDZIESZ
                </h2>
                <h4 className="flex-1 px-4 leading- lg:leading-normal pb-2 lg:pb-0 lg:px-0 font-medium lg:font-regular text-left lg:text-right">
                  <span className="text-orange">Wola Mielecka 632 </span>
                  <br />
                  39-300 Mielec
                </h4>
              </div>
              <iframe
                className="w-full mx-auto min-h-screen-1/3 hlg:min-h-screen-1/4 md:min-h-screen-1/2"
                src="https://maps.google.com/maps?q=MKT%20SERWIS%20CENTRUM%20BLACHARSKO%20LAKIERNICZE%20WOLA%20MIELECKA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </section>
          </div>
        </div>

        {showFooter && (
          <footer
            className="fixed bottom-0 text-center  bg-black2 z-20"
            style={{ height: '26rem' }}
          >
            <div className="container mx-auto flex flex-col h-full justify-around ">
              <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center mx-auto">
                <img className="h-24" src="/narodowa_strategia.png" />
                <img className="h-24" src="/podkarpackie_logo.png" />
                <img className="h-24" src="/ue_fundusz.png" />
              </div>

              <div className="mx-auto container mx-auto pb-4">
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
        className="absolute w-full text-center p-1 lg:p-5 pointer-events-none"
      >
        <div className="font-medium text-2xl leading-tight lg:leading-normal py-1">
          {title}
        </div>
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
        <h2 className="text-lg leading-tight lg:leading-normal lg:text-2xl py-1 lg:py-2 font-medium lg:font-semibold">
          {title}
        </h2>
        <div className="w-12 h-1 bg-orange" />
        <h5 className="hidden md:block text-sm lg:text-base py-1 lg:py-2 font-medium">
          {children}
        </h5>
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
    <div className="relative">
      <div
        className="absolute hidden lg:block h-full w-full z-0 top-0 left-0 z-0"
        style={{
          backgroundImage: `url(/${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        ref={measureStep}
        className={`relative z-10 w-full px-4 p-0 lg:py-12 mb-4 flex flex-col rounded ${className}`}
        style={{
          alignSelf: reversed ? 'flex-end' : 'flex-start',
        }}
      >
        <div className="flex flex-col items-stretch w-full">
          <motion.div
            className="flex flex-row items-stretch"
            style={{
              justifyContent: reversed ? 'flex-end' : 'flex-start',
            }}
            transition={{ type: 'spring', mass: 5, stiffness: 10 }}
          >
            <div
              className="h-16 w-16 flex justify-center items-center bg-orange text-2xl font-semibold shadow-xl"
              style={reversed ? { order: 2 } : {}}
            >
              {index}
            </div>
            <div className="flex-1 lg:flex-initial flex items-center bg-black2">
              <h2 className="text-lg leading-tight lg:leading-normal lg:text-2xl px-4 bg-black2">
                {title}
              </h2>
            </div>
          </motion.div>
          <motion.p
            className={`hidden lg:block font-medium text-2xl py-4 px-2 bg-black-t ${
              reversed ? 'text-right' : ''
            }`}
          >
            {children}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Home
