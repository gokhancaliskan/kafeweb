import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css"; // CSS modülünü import ettik

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logos/fairytale.png"
            alt="Fairytale Logo"
            width={240}
            height={60}
          />
        </Link>
      </div>
      <div className={styles.socialIcons}>
        <Link href="https://www.facebook.com/profile.php?id=61560067397187">
          <Image
            src="/icons/facebook.png"
            alt="Facebook"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.youtube.com/@fairytalecoffees">
          <Image
            src="/icons/youtube.png"
            alt="YouTube"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.instagram.com/coffeefairytale/">
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
