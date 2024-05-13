"use client";

import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <header>
      <nav className="topbar">
        <Link href={"/"} className="flex items-center gap-4">
          <Image src={"/logo.svg"} alt="logo" width={28} height={28} />
          <span className=" text-heading3-bold text-light-1 max-xs:hidden">
            Threads
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Topbar;
