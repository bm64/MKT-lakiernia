import React, { useRef } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  DotGroup,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import withFadeIn from '../animations/withFadeIn'

function Home() {
  return (
    <Layout>
      <div>
        <div className="h-screen overflow-x-hidden">
          <video
            autoplay="true"
            loop="true"
            playsinline="true"
            className="absolute top-0 min-h-screen object-left-top object-cover z-0"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>

          <div className="hero-content">
            <div className="flex flex-col items-center py-12 z-10">
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
              <div className="border-2 border-orange px-12 py-3 z-10">
                <span className="text-orange text-2xl font-bold">Zadzwoń</span>
              </div>
            </div>
            <div className="h-40 bg-white-t z-10">
              <img className="h-full object-contain px-8" src={'/logos.png'} />
            </div>
          </div>

          <Header />
        </div>

        <CarouselProvider
          naturalSlideWidth={window.innerWidth}
          naturalSlideHeight={window.innerHeight / 1.15}
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
          <div className="mx-auto">
            <h2 className="font-bold text-center">
              <span className="text-orange">Skontaktuj</span> się
            </h2>
            <div className="line bg-orange" />
            <div className="mx-auto w-10/12 flex flex-col items-center justify-center border border-orange px-4 py-12">
              <div>
                <p>Adres e-mail</p>
                <input className="bg-gray" type="text" />
              </div>
              <div>
                <p>Treść wiadomości</p>
                <textarea />
              </div>
              <div></div>
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
      </div>
    </Layout>
  )
}

const FadeImage = withFadeIn(
  ({ src }) => <img src={src} className="section-img" />,
  1000
)

export default Home
