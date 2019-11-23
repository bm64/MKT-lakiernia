import React from "react";

import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="relative z-10 w-full bg-transparent">
      <div className="max-w-screen-xl flex justify-between bg-transparent items-center h-16 mx-auto px-3">
        <h1 className="text-2xl text-gray-300">MKT SERWIS</h1>
        <FaBars className="text-4xl text-gray-300" />
      </div>
    </div>
  );
}

export default Header;
