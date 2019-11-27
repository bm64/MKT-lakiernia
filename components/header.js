import React, { useState, useCallback, useRef } from 'react'

import { FaBars, FaAngleDoubleRight } from 'react-icons/fa'

function Header({}) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu])

  return (
    <div className="fixed top-0 w-full bg-transparent z-20">
      <div className="max-w-screen-xl flex justify-between items-center bg-transparent z-20 h-16 mx-auto px-3">
        <h1 className="font-bold text-white ">MKT SERWIS</h1>
        <div className="cursor-pointer" onClick={toggleMenu}>
          {!showMenu ? (
            <FaBars className="text-4xl text-white" />
          ) : (
            <FaAngleDoubleRight className="text-4xl text-white" />
          )}
        </div>
      </div>
      <div
        className="w-full bg-orange p-6"
        style={{
          height: 'calc(100vh - 4rem)',
          transition: 'transform 0.5s',
          transform: showMenu ? 'translateX(0)' : 'translateX(100vw)',
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
