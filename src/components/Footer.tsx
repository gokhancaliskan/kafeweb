import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-link">
      <Link href={"https://wa.me/905421100178"}>
        <Image
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
};

export default Footer;
