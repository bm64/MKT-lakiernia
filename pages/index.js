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

  const scrollToRef = (ref) => window.scrollTo(0, (window.pageYOffset + ref.current.getBoundingClientRect().top - 32) )
  

  return (
    <Layout>
      <div
        id="navbar"
        className="md:fixed h-screen  flex flex-col flex-between items-stretch bg-black2 z-30 max-h-screen"
      >
        <h2 onClick={()=>scrollToRef(oneScrollRef)} className={`${sixVisible && !oneVisible ? 'text-orange ' : ''}   text-center w-full font-bold py-2 mx-auto cursor-pointer transform duration-700 hover:text-orange hover:bg-black-t`}>MKT SERWIS</h2>
        <div
          className="flex flex-col h-full flex-1"
          style={{ flexBasis: 0 }}
        > 
          <div onClick={()=>scrollToRef(twoScrollRef)} 
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
          <div onClick={()=>scrollToRef(threeScrollRef)}
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
          <div onClick={()=>scrollToRef(fourScrollRef)}
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
            onClick={()=>scrollToRef(fiveScrollRef)}
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
              O nas</h4>
          </div>
          <div onClick={()=>scrollToRef(sixScrollRef)}
            className={`${
              fiveVisible ? 'bg-black-t' : ''
            } navbar-item`}
          >
            <FaBars
              className={`${fiveVisible ? 'text-orange' : ''} text-4xl`}
            />
            <h4
              className={`${
                fiveVisible ? 'text-orange' : ''
              } text-center font-medium px-2 pt-1`}
            >
           Kontakt</h4>
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
          <h3 className="flex-1 font-medium mx-auto text-center pb-2">Zadzwoń do nas!</h3>
          <div className="py-2 flex flex-row items-center cursor-pointer">
            <FaPhone className="text-2xl" style={{ transform: 'scaleX(-1)' }} />
            <h5 className="px-4 text-orange font-semibold">17 583 05 96</h5>
          </div>
          <div className="py-2 flex flex-row items-center cursor-pointer">
            <MdPhoneIphone className="text-2xl" />
            <h5 className="px-4 text-orange font-semibold">602 583 583</h5>
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
              <h2 className="font-bold text-4xxl leading-tight py-2 " style={{letterSpacing: '0.2em'}}>MKT SERWIS</h2>
              <h1 className="font-semibold text-6xl whitespace-no-wrap leading-tight pt-2">
                CENTRUM 
              </h1>
              <h1 className="font-semibold text-6xl whitespace-no-wrap leading-none pb-3">
                 BLACHARSKO LAKIERNICZE
              </h1>

             <h4 className="font-regular text-xl py-3 max-w-4xl  ">Kompleksowa obsługa szkód komunikacyjnych. Możliwość bezgotówkowego rozliczenia sprawy. Kompleksowa obsługa szkód komunikacyjnych.</h4>
             <div className="flex flex-row">
               <div className="text-2xl bg-black2 py-3 px-5 font-medium my-5 transform duration-300 hover:bg-orange hover:text-black">Zobacz więcej</div>
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
            <section className="w-full bg-black">
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
                <h2 ref={twoScrollRef} className="relative inline-block px-10 py-4 bg-orange font-semibold text-black z-10">
                  PROFESJONALNE USŁUGI LAKIERNICZE
                </h2>
                <div className="py-8 panels-grid grid grid-cols-4 gap-4">
                  <Panel
                    className="row-span-4 col-span-4 lg:col-span-2"
                    title="Profesjonalne narzędzia lakiernicze"
                    image="/car_painting.jpeg"
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

            <section ref={twoRef} className="mt-4 relative">
              <div
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

                <h2 ref={threeScrollRef} className="inline-block px-12 py-4 bg-orange font-semibold text-black">
                  ZOBACZ JAK WYGLĄDA PROCES LIKWIDACJI SZKODY
                </h2>

                <h2 className="px-3 py-4 pb-4 text-right">
                  Zobacz jak wygląda proces likwidacji
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
              <h2 ref={fourScrollRef}
              className="inline-block px-12 py-4  mb-8 bg-orange font-semibold text-black">
                USŁUGI DODATKOWE
              </h2>

              <div
                style={{
                  backgroundImage: 'url(/services1.png)',
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
                  backgroundImage: 'url(/services2.png)',
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
                  backgroundImage: 'url(/services3.png)',
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
                  backgroundImage: 'url(/services4.png)',
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

            <section className="container mx-auto">
              <h2 className="inline-block px-12 py-4  mb-8 bg-orange font-semibold text-black">
                PLACEHOLDER
              </h2>
              <div className="container overflow-hidden grid grid-cols-2 lg:grid-cols-4 mx-auto">
                <GalleryItem title="Szybka realizacja" image="/gallery1.png"><FaCalendarCheck className="gallery-item"/></GalleryItem>
                <GalleryItem title="Profesjonalny sprzęt" image="/gallery2.png"><FaTools className="gallery-item"/></GalleryItem>
                <GalleryItem title="Doskonała obsluga" image="/gallery3.png"><FaHandshake className="gallery-item text-6xl"/></GalleryItem>
                <GalleryItem title="Zadowoleni klienici" image="/gallery4.png"><FaThumbsUp className="gallery-item"/></GalleryItem>
                </div>
            </section>
            <section
              ref={fourRef}
              className="container mx-auto "
              style={{ paddingTop: '12rem', paddingBottom: '2rem' }}
            >
              <img className="w-full" src="/lakierniaxdd.png" />
              <div
                className="flex flex-col items-start bg-black-t transform bg-blac"
                style={{
                  backgroundColor: '#1B1B1EAA',
                  backgroundImage: 'url(/footer_img.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPositionX: '70%',
                }}
              >
                <h2 ref={fiveScrollRef}
                  style={{ transform: 'translateY(-50%)' }}
                  className="absolute top-0 left-0 inline-block px-12 py-4 bg-orange font-semibold text-black"
                >
                  O NASZEJ FIRMIE
                </h2>
                <div className="pb-8 pt-16 bg-black-t">
                  <div className="pb-8 flex flex-col lg:flex-row items-stretch">
                    <div className="p-4">
                      <h2 className="font-semibold text-orange">
                        Kim jesteśmy?
                      </h2>
                      <div className="py-2 flex flex-col lg:flex-row">
                        <p className="pr-1 font-medium">
                          Ostatnim krokiem jaki powinienes podjąć jest
                          zgłoszenie szkody z polisy AC lub OC do..Pierwszym
                          krokiem jaki powinienes podjąć jest zgłoszenie szkody
                          z polisy AC lub OC do..
                        </p>
                        <p className="font-medium">
                          Ostatnim krokiem jaki powinienes podjąć jest
                          zgłoszenie szkody z polisy AC lub OC do..Pierwszym
                          krokiem jaki powinienes podjąć jest zgłoszenie szkody
                          z polisy AC lub OC do..
                        </p>
                      </div>
                    </div>
                    <div className="h-56 w-2 bg-orange rounded" />
                    <div className="p-4">
                      <h2 className="font-semibold text-orange">
                        Czym się zajmujemy?
                      </h2>
                      <div className="py-2 flex flex-col lg:flex-row">
                        <p className="pr-1 font-medium">
                          Ostatnim krokiem jaki powinienes podjąć jest
                          zgłoszenie szkody z polisy AC lub OC do..Pierwszym
                          krokiem jaki powinienes podjąć jest zgłoszenie szkody
                          z polisy AC lub OC do..
                        </p>
                        <p className="font-medium">
                          Ostatnim krokiem jaki powinienes podjąć jest
                          zgłoszenie szkody z polisy AC lub OC do..Pierwszym
                          krokiem jaki powinienes podjąć jest zgłoszenie szkody
                          z polisy AC lub OC do..
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="inline-block px-12 py-4 bg-orange font-semibold text-black">
                    NASI PRACOWNICY
                  </h2>
                  <div className="py-16 w-full flex flex-row justify-evenly">
                    <div>
                      <img src="/bartek.jpg" className="h-64 w-64" />
                      <h2 className="font-semibold">Bartłomiej Kula</h2>
                      <h4 style={{ maxWidth: '15rem' }}>
                        Kierownik Centrum Blacharsko-Lakierniczego
                      </h4>
                      <h5 className="text-orange">+48 17 583 05 96</h5>
                      <h5 className="text-orange">+48 17 583 05 96</h5>
                      <h5 className="text-orange">m.kotwica@mktserwis.pl</h5>
                    </div>
                    <div>
                      <img src="/maciej.jpg" className="h-64 w-64" />
                      <h2 className="font-semibold">Maciej Kotwica</h2>
                      <h4 style={{ maxWidth: '15rem' }}>
                        Specjalista Centrum Blacharsko-Lakierniczego
                      </h4>
                      <h5 className="text-orange">+48 17 583 05 96</h5>
                      <h5 className="text-orange">+48 17 583 05 96</h5>
                      <h5 className="text-orange">m.kotwica@mktserwis.pl</h5>
                    </div>
                    <div>
                      <img src="/ewa.jpg" className="h-64 w-64" />
                      <h2 className="font-semibold">Ewa Janusz</h2>
                      <h4 style={{ maxWidth: '15rem' }}>
                        Asystentka Centrum Blacharsko-Lakierniczego
                      </h4>
                      <h5 className="text-orange">+48 17 583 05 96</h5>
                      <h5 className="text-orange">+48 17 583 05 96</h5>
                      <h5 className="text-orange">m.kotwica@mktserwis.pl</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section ref={fiveRef} ref={sixScrollRef} className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-center">
                <div onClick={()=>scrollToRef(sixScrollRef)}
                  className="relative shadow-md transform translate-x-10"
                  style={{
                    backgroundImage: 'url(car3.jpeg)',
                    backgroundSize: 'cover',
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.9)',
                  }}
                >
                  <h2
                    style={{
                      boxShadow: '10px 10px 10px rgba(0,0,0,0.9)',
                    }}
                    className="absolute top-0 left-0 px-12 py-4 bg-orange text-black font-semibold transform -translate-y-12"
                  >
                    SKONTAKTUJ SIĘ Z NAMI
                  </h2>
                  <div className="pl-16 pr-40 py-16 h-full bg-black-t">
                    <h1 className="font-semibold">Potrzebujesz pomocy?</h1>
                    <p className="p-4 font-medium text-lg max-w-sm">
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
                        Wola Mielecka 632<br/>39-300 Mielec
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
                <h2 className="py-2 px-6 text-black text-left  font-semibold bg-orange">
                  TUTAJ NAS ZNAJDZIESZ
                </h2>
                <h4 className="flex-1 text-right">
                  <span className="text-orange">Wola Mielecka 632</span> -
                  39-300 Mielec
                </h4>
              </div>
              <iframe
                className="w-full mx-auto min-h-screen-1/4 md:min-h-screen-1/2"
                src="https://maps.google.com/maps?q=MKT%20SERWIS%20CENTRUM%20BLACHARSKO%20LAKIERNICZE%20WOLA%20MIELECKA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
              <div
                className="flex flex-col lg:flex-row md:justify-center p-5"
                style={{ flexBasis: 0 }}
              >
                <img
                  src="/narodowa_strategia.png"
                  className="flex-1 h-24 xl:h-32 p-5 object-contain"
                />
                <img
                  src="/podkarpackie_logo.png"
                  className="flex-1 h-24 xl:h-32 p-5 object-contain"
                />
                <img
                  src="/ue_fundusz.png"
                  className="flex-1 h-24 xl:h-32 p-5 object-contain"
                />
              </div>
            </section>
          </div>
        </div>

        {showFooter && (
          <footer
            className="fixed bottom-0 h-64 w-full text-center bg-black2 z-20"
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
        )}
      </div>
    </Layout>
  )
}

function GalleryItem({image, title, children}){
  return (
    <div
                  style={{
                    backgroundImage: `url(${image})`,
                    paddingTop: '150%',
                  }}
                  className="relative overflow-hidden bg-contain bg-no-repeat hover:scale-105 transform  duration-300"
    >
                  <div className="gallery-effect h-full w-full absolute left-0 bottom-0 cursor-pointer" />
                  <div
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                    className="absolute w-full text-center p-5 pointer-events-none"
                  >
                    <div className="font-medium text-2xl py-1">
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

  const measureStep = useCallback(ref => {
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
