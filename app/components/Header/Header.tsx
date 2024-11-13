import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="h-[88px] bg-[#D9D9D9] flex items-center justify-center">
      <ul className="flex flex-row space-x-8">
        <li>
          <Link href="/" className="text-[25px] text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-[25px] text-black">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
