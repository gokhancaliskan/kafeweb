import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link className="" href={""}>
          <Image
            src="/logos/fairytale.png"
            alt=""
            width={280}
            height={70}
          />
        </Link>
      </div>
      <div className="social-icons">
        <Link href="#">
          <Image
            src="/icons/facebook.png"
            alt="Facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons/youtube.png"
            alt="YouTube"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
