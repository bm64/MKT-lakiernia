import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

function Header({}) {
  const showMenu = useState(false);

  return (
    <div className="absolute top-0 z-10 w-full bg-transparent">
      <div className="z-10 max-w-screen-xl flex justify-between bg-transparent items-center h-16 mx-auto px-3">
        <h1 className="text-2xl font-bold text-gray-300">MKT SERWIS</h1>
        <FaBars className="text-4xl text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
