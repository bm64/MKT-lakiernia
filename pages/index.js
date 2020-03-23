import React, { useState, useRef, useEffect, useMemo } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import { MdPhoneIphone, MdMailOutline } from 'react-icons/md'
import {
  FaBars,
  FaCarCrash,
  FaWarehouse,
  FaUserFriends,
  FaPhone,
  FaWrench,
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

  const oneVisible = useOnEnterLeave(oneRef)
  const twoVisible = useOnEnterLeave(twoRef)
  const threeVisible = useOnEnterLeave(threeRef)
  const fourVisible = useOnEnterLeave(fourRef)
  const fiveVisible = useOnEnterLeave(fiveRef)

  return (
    <Layout>
      <div
        id="navbar"
        className="md:fixed h-screen flex flex-col flex-between items-stretch bg-black2 z-30 max-h-screen"
      >
        <h2 className="py-4 text-center font-bold">MKT SERWIS</h2>
        <div className="navbar-item">
          <FaWarehouse
            className={`${
              oneVisible && !twoVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">
            Centrum blacharsko lakiernicze
          </h4>
        </div>
        <div className="navbar-item">
          <FaCarCrash
            className={`${
              twoVisible && !threeVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">Likwidacja szkody</h4>
        </div>
        <div className="navbar-item">
          <FaWrench
            className={`${
              threeVisible && !fourVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">Usługi dodatkowe</h4>
        </div>
        <div className="navbar-item">
          <FaUserFriends
            className={`${
              fourVisible && !fiveVisible ? 'text-orange' : ''
            } text-4xl`}
          />
          <h4 className="text-center font-medium">O nas</h4>
        </div>
        <div className="navbar-item">
          <FaBars className={`${fiveVisible ? 'text-orange' : ''} text-4xl`} />
          <h4 className="text-center font-medium">Kontakt</h4>
        </div>

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
          <div className="relative">
            <video
              autoPlay={true}
              loop={true}
              playsInline={true}
              className="min-h-screen object-cover w-full"
            >
              <source src="/video1.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute bottom-0 left-0 h-64 w-full"
              style={{
                background:
                  '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0,  #1b1b1e 90%,  #1b1b1e 100%)',
              }}
            />
          </div>

          <section className="pb-0 container mx-auto flex flex-row justify-around">
            <img src="skoda_biala.png" className="p-12" />
            <img src="vw.png" className="p-12" />
            <img src="kia_srodek.png" className="p-12" />
            <img src="fiat.png" className="p-12" />
            <img src="fiat_professional.png" className="p-12" />
          </section>

          <section
            ref={oneRef}
            className="container mx-auto border-l border-orange"
          >
            <h1 className="px-2 font-semibold text-5xl leading-tight tracking-wide">
              Projesjonalne
            </h1>
            <h3 className="font-normal text-5xl text-orange transform translate-x-10 leading-tight tracking-tight">
              usługi lakiernicze
            </h3>
            <div className="py-6 panels-grid grid grid-cols-4 gap-4">
              <Panel
                className="row-span-2 col-span-4 lg:col-span-2"
                title="Profesjonalne narzędzia lakiernicze"
                image="/car_painting.jpeg"
              >
                Własny mieszalnik cromax pro na bazie wody
                <br />
                Pistolety SATA oraz IWATA
              </Panel>
              <Panel
                className="col-span-4 lg:col-span-2"
                title="CAR-O-LINER MARK 6"
                image="/mark6.jpg"
              >
                Umożliwiający naprawę samochodów dostawczych o wadze do 3.5t
              </Panel>
              <Panel
                className="col-span-2 lg:col-span-1"
                title="Spectrofotometr CROMAX"
                image="/spectrofotometr.jpg"
              >
                Nowy poziom dopasowania koloru ze spektrofotometrem
              </Panel>
              <Panel
                className="col-span-2 lg:col-span-1"
                title="Kabina nova Verta"
                image="/nova_verta.jpg"
              >
                Kabiny lakiernicze przystosowane do procesów lakierniczych
              </Panel>
            </div>
          </section>

          <section ref={twoRef} className="container mx-auto">
            <h1
              className="inline px-6 py-2 text-5xl text-black text-left font-medium"
              style={{ backgroundColor: '#cccccc' }}
            >
              MIAŁEŚ SZKODĘ?
            </h1>
            <h2 className="px-3 py-4 pb-4">
              Zobacz jak wygląda proces likwidacji
            </h2>
            <div className="flex flex-col items-stretch overflow-hidden shadow-inner">
              <Step
                index={1}
                title="Zgłoszenie szkody z polisy AC lub OC"
                image="insurance.jpg"
              >
                Pierwszym krokiem jaki powinienes podjąć jest zgłoszenie szkody
                z polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step
                index={2}
                title="Oględziny pojazdu"
                image="inspection.jpg"
                reversed
              >
                Drugim krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>
              <Step
                index={3}
                title={'Ustalenie zakresu odpowiedzialności'}
                image="reception.jpg"
              >
                Trzecim krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step
                index={4}
                title="Samochód zastępczy"
                image="replacement.jpg"
                reversed
              >
                Czwartym krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>

              <Step
                index={5}
                title="Rozliczanie koszt napraw"
                image="insurance.jpg"
              >
                Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie szkody z
                polisy AC lub OC do..Pierwszym krokiem jaki powinienes podjąć
                jest zgłoszenie szkody z polisy AC lub OC do..
              </Step>
            </div>
            <h1 className="py-4 px-8 font-semibold text-white bg-black2 shadow">
              <span className="float-right text-orange">+48 123 456 789</span>
              ZADZWOŃ JUŻ TERAZ
            </h1>
          </section>

          <section ref={threeRef} className="container mx-auto">
            <div
              className="relative flex flex-col md:flex-row items-center shadow-inner"
              style={{ flexBasis: 0 }}
            >
              <div
                className="absolute top-0 left-0 w-full"
                style={{
                  flex: 2,
                  height: '36rem',
                  backgroundImage: 'url(/skoda.jpg)',
                  backgroundSize: 'cover',

                  backgroundPosition: '77% 100%',
                  filter: 'blur(4px)',
                }}
              />
              <div
                className="pl-2 py-4 flex flex-col rounded-lg"
                style={{
                  flex: 2,
                  height: '36rem',
                  backgroundImage: 'url(/skoda.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',

                  clipPath: 'polygon(0 0, 100% 0%, 60% 100%, 0% 100%)',
                }}
              >
                <div className="flex-1" />
                <div className="flex flex-row justify-between items-end">
                  <h4 className="px-2 text-black2 font-light bg-white rounded-sm max-w-xs xxl:max-w-none">
                    Naszym klientom samochody zastępcze udostępnia{' '}
                    <span className="font-bold">SKODA</span>
                  </h4>
                  <img src="/skoda_biala.png" className="h-40" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="px-8 transform -translate-x-8 font-semibold text-right text-white text-4xl leading-tight">
                  WYPOŻYCZALNIA SAMOCHODÓW
                </h1>
                <p className="px-8 py-4 flex-1 transform -translate-x-8 text-white text-right font-medium text-xl">
                  Ostatnim krokiem jaki powinienes podjąć jest zgłoszenie szkody
                  z polisy AC lub OC do..Pierwszym krokiem jaki powinienes
                  podjąć jest zgłoszenie szkody z polisy AC lub OC do..
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-row  w-9/12 mx-auto">
            <div className="flex-1 flex-col px-10 transform duration-500 hover:scale-110">
              <div className="relative ">
                <div
                  style={{
                    backgroundImage: 'url(/bartek.jpg)',
                    height: '25rem',
                  }}
                  className="w-full h-full bg-cover bg-top bg-no-repeat "
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
            <div className="flex-1 flex-col px-10 transform duration-500 hover:scale-110 shadow-">
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
            <div className="flex-1 flex-col px-10 transform duration-500 hover:scale-110">
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
                  <span className="text-xl text-black font-medium">
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
                  <MdPhoneIphone className="text-6xl text-orange mx-4" />
                </div>
                <div className="py-4 flex flex-row items-center text-center">
                  <div className="flex-1 text-left">
                    <h2>E-mail</h2>
                    <a href="mailto:lakiernia@mktoserwis.pl">
                      lakiernia@mktserwis.pl
                    </a>
                  </div>
                  <MdMailOutline className="text-6xl text-orange mx-4" />
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto">
            <div className="flex flex-row items-center">
              <h3 className="py-2 px-6 text-black text-left md:text-3xl font-semibold bg-white">
                TUTAJ NAS ZNAJDZIESZ
              </h3>
              <h4 className="flex-1 text-right">
                <span className="text-orange">Wola Mielecka 632</span> - 39-300
                Mielec
              </h4>
            </div>
            <iframe
              className="w-full mx-auto min-h-screen-1/4 md:min-h-screen-1/2"
              src="https://maps.google.com/maps?q=Wola%20mielecka%20lakiernia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <div className="flex flex-col md:flex-row md:justify-between p-5">
              <img
                src="/narodowa_strategia.png"
                className="p-5 w-full object-contain"
              />
              <img
                src="/podkarpackie_logo.png"
                className="p-5 w-full object-contain"
              />
              <img
                src="/ue_fundusz.png"
                className="p-5 w-full object-contain"
              />
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

function Panel({ className = '', title, image, children }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          transitionDuration: '3500ms',
        }}
        className="transform h-full w-full bg-center bg-cover hover:scale-110"
      />
      <div
        className="absolute left-0 bottom-0 w-full p-4"
        style={{
          background:
            '-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, black 60%, black 100%)',
        }}
      >
        <h2 className="font-semibold">{title}</h2>
        <div className="w-2/3 h-1 bg-orange" />
        <h5>{children}</h5>
      </div>
    </div>
  )
}

function Step({ index, title, reversed = false, image, children }) {
  const { width, height } = useWindowSize()

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

  const rx = useTransform(
    scrollY,
    [y - height / 6, y + height / 2.3],
    reversed ? [900, 0] : [-900, 0]
  )

  const x = useSpring(rx, { damping: 600 })

  const opacity = useTransform(x, reversed ? [600, 0] : [-600, 0], [0, 1])

  return (
    <div
      className="relative w-full px-4 py-12 flex flex-row"
      style={{
        alignSelf: reversed ? 'flex-end' : 'flex-start',
        backgroundImage: `url(/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 0 3px 1px black inset',
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
          ref={ref}
          style={{
            justifyContent: reversed ? 'flex-end' : 'flex-start',
            x,
            opacity,
            backgroundColor: '#333333',
          }}
          transition={{ type: 'spring', mass: 0.3, stiffness: 10 }}
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
          className={`font-medium text-2xl py-4 px-2 bg-black2 ${
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
