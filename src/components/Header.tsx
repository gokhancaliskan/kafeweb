import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link className="" href={""}>
          <img src="/logos/fairytale.png" alt="" />
        </Link>
      </div>
      <div className="icons">
        <Link href="#">
          <img src="/icons/facebook.png" alt="Facebook" />
        </Link>
        <Link href="#">
          <img src="/icons/youtube.png" alt="YouTube" />
        </Link>
        <Link href="#">
          <img src="/icons/instagram.png" alt="Instagram" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
