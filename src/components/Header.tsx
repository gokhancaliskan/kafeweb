import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link className="" href={""}>
          <Image src="/logos/fairytale.png" alt="" />
        </Link>
      </div>
      <div className="icons">
        <Link href="#">
          <Image src="/icons/facebook.png" alt="Facebook" />
        </Link>
        <Link href="#">
          <Image src="/icons/youtube.png" alt="YouTube" />
        </Link>
        <Link href="#">
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
