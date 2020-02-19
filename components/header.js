import React, { useState, useCallback, useRef } from 'react'

import { FaBars, FaAngleDoubleRight } from 'react-icons/fa'

function Header({ }) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu])

  return (
    <div className="absolute top-0 w-full bg-transparent z-10">
      <div className="container flex justify-between items-center bg-transparent z-20 h-16 mx-auto px-3 md:p-10 xl:pt-20">
        <h1 className=" font-bold text-white md:text-5xl xl:text-5xl">
          MKT SERWIS
        </h1>
        <div className="cursor-pointer xl:hidden" onClick={toggleMenu}>
          {!showMenu ? (
            <FaBars className="text-4xl text-white md:text-5xl" />
          ) : (
              <FaAngleDoubleRight className="text-4xl text-white md:text-5xl" />
            )}
        </div>
        <div className="hidden xl:flex flex-row item-center">
          <h1 className="header-item">START</h1>
          <h1 className="header-item">USŁUGI</h1>
          <h1 className="header-item">O NAS</h1>
          <h1 className="header-item">KONTAKT</h1>
        </div>
      </div>
      <div
        className="w-full bg-orange p-6 z-20"
        style={{
          height: 'calc(100vh - 4rem)',

          display: showMenu ? 'inherit' : 'none',
        }}
      >
        <div className="footer-item">START</div>
        <div className="footer-item">KONTAKT</div>
        <div className="footer-item ">USŁUGI</div>
        <div className="footer-item">POLITYKA PRYWATNOŚCI</div>
        <div className="footer-item">USŁUGI</div>
      </div>
    </div>
  )
}

export default Header
