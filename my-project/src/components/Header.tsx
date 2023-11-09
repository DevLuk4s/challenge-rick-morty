import React from "react";
import Image from "next/image";
import logo from "../img/logo.png";

function Header() {
  return (
    <header className="flex justify-around items-center p-5">
      <Image className="w-16" src={logo} alt="logo" />

      <nav>
        <ul className="flex space-x-5">
          <li>
            <a className="hover:text-green-500 font-semibold text-lg" href="#">
              Character
            </a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold text-lg" href="#">
              Location
            </a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold text-lg" href="#">
              Episode
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
