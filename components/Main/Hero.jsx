import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Hero.module.scss";
import heroImageMobile from "../../assets/image/hero_640.jpg";
import heroImageDesktop from "../../assets/image/hero_1920.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);
  const [viewportHeight, setViewportHeight] = useState(null);

  useEffect(() => {
    const updateHeroHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeroHeight);

    // Ustawienie początkowej wysokości
    updateHeroHeight();

    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleMediaQueryChange = (e) => {
      setCurrentImage(e.matches ? heroImageDesktop : heroImageMobile);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  });
  return (
    <section id="hero" className={classes.hero}>
      <div className={classes.imageContainer}>
        <Image
          src={currentImage}
          alt="Hero grafika"
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={classes.textOverlay}>
        <h1 className={classes.hero__title}>
          Search <span className={classes.hero__title__span}>IT</span>
        </h1>
        <p>Usługi tworzenia stron WWW oraz aplikacji webowych</p>
        <Link href="#projekty" className={classes.button}>
          Projekty
        </Link>
      </div>
    </section>
  );
};

export default Hero;
