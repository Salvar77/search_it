import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Hero.module.scss";
import heroImageMobile from "../../assets/image/hero_640.jpg";
import heroImageDesktop from "../../assets/image/hero_1920.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImageMobile);
  const [viewportHeight, setViewportHeight] = useState(null);
  const [textStyle, setTextStyle] = useState({ filter: "blur(5px)" });

  useEffect(() => {
    const updateHeroHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeroHeight);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextStyle({ filter: "blur(0px)" });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

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
      <div className={classes.textOverlay} style={textStyle}>
        <h1 className={classes.hero__title}>
          Search <span className={classes.hero__title__span}>IT</span>
        </h1>
        <p>Usługi tworzenia stron i sklepów internetowych</p>
        <Link href="#realizacje" className={classes.button}>
          Realizacje
        </Link>
      </div>
    </section>
  );
};

export default Hero;
