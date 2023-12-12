import React from "react";
import Image from "next/image";
import logo from "@/img/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around items-center p-5">
      <Image className="w-12" src={logo} alt="logo" />
      <nav>
        <ul className="flex space-x-5">
          <li>
            <Link
              className="hover:text-green-500 font-semibold text-lg"
              href={"/"}
            >
              Character
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-green-500 font-semibold text-lg"
              href=""
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-green-500 font-semibold text-lg"
              href=""
            >
              Episode
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
