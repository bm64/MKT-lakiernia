import React, { useState, useCallback, useRef } from 'react'

import { FaBars, FaAngleDoubleRight } from 'react-icons/fa'

function Header({}) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu])

  return (
    <div
      style={{ width: 'calc(100% - 12rem)' }}
      className=" hidden absolute  z-10 mx-auto text-center"
    >
      <h1
        style={{ textShadow: '1px 1px 1px #1B1B1E' }}
        className="font-bold text-white py-5 xl:text-5xxl"
      >
        MKT SERWIS
      </h1>
    </div>
  )
}

export default Header
