import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

function Header({}) {
  const showMenu = useState(false);

  return (
    <div className="absolute top-0 w-full bg-transparent z-10">
      <div className="max-w-screen-xl flex justify-between items-center bg-transparent z-10 h-16 mx-auto px-3">
        <h1 className="font-bold text-gray-300">MKT SERWIS</h1>
        <FaBars className="text-4xl text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
