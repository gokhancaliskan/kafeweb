import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "../styles/home.module.css"; // CSS modülünü import ettik

const Home = () => {
  const router = useRouter();

  const handleNavigation = (category: string) => {
    router.push({
      pathname: "/menu",
    });
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/logos/kave.jpg"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.textButtons}>
          <div
            className={styles.textButton}
            onClick={() => handleNavigation("icecek")}
          >
            Menü
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
