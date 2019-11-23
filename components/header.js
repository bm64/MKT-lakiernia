import React, { useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";

import { FaBars, FaAngleDoubleRight } from "react-icons/fa";

function Header({}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu]);

  return (
    <div className="absolute top-0 w-full bg-transparent z-20">
      <div className="max-w-screen-xl flex justify-between items-center bg-transparent z-20 h-16 mx-auto px-3">
        <h1 className="font-bold text-gray-300">MKT SERWIS</h1>
        <div className="cursor-pointer" onClick={toggleMenu}>
          {!showMenu ? (
            <FaBars className="text-4xl text-gray-300" />
          ) : (
            <FaAngleDoubleRight className="text-4xl text-gray" />
          )}
        </div>
      </div>
      <div
        className="w-full bg-orange"
        style={{
          height: "calc(100vh - 4rem)",
          transition: "transform 0.5s",
          transform: showMenu ? "translateX(0)" : "translateX(100vw)"
        }}
      ></div>
    </div>
  );
}

export default Header;
