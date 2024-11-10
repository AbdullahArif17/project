import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div
      className="h-[88px] bg-[#D9D9D9]"
    ><ul className="flex flex-col items-center">
    <li>
      <Link
        href="/"
        className="text-[25px] text-lg m-8 text-black"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href="/about"
        className="text-lg text-[25px] m-8 text-black"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        href="/figma"
        className="text-lg m-8 text-[25px] text-black"
      >
        Design
      </Link>
    </li>
  </ul></div>
  );
}

export default Header;
