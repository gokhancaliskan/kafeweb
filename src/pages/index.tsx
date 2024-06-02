import { useRouter } from "next/router";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  const handleNavigation = (category: string) => {
    router.push({
      pathname: "/menu",
    });
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <Image
          src="/logos/kave.jpg"
          alt="Main Image"
          layout="responsive"
          width={500}
          height={800}
        />
        <div className="text-buttons">
          <div
            className="text-button"
            onClick={() => handleNavigation("icecek")}
          >
            Menü
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
