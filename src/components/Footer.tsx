import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css"; // CSS modülünü import ettik

const Footer = () => {
  return (
    <div className={styles.footerLink}>
      <Link href={"https://wa.me/905416489808"}>
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
