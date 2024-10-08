import Link from "next/link";
import classes from "./Realizations.module.scss";
import Image from "next/image";
import photo1 from "../../assets/image/hero2_640.jpg";
import photo2 from "../../assets/image/seasun.jpg";
import vcardFazar from "../../assets/image/vcardSvg.svg";
import Fazar from "../../assets/image/FazarSvg.webp";
import { useState, useRef, useEffect } from "react";

const Realizations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState({
    boxOne: "realizations__hidden",
    boxTwo: "realizations__hidden",
    boxThree: "realizations__hidden",
  });
  const sectionRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleMediaChange = (event) => {
      setAnimationClass((prev) => ({
        ...prev,
        boxThree: event.matches
          ? "realizations__hidden"
          : "realizations__hidden",
      }));
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaQuery);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setAnimationClass((prev) => ({
            boxOne: "realizations__boxOT--fromLeft",
            boxTwo: "realizations__boxOT--fromRight",
            boxThree: window.matchMedia("(min-width: 992px)").matches
              ? "realizations__boxOT--fromBottom"
              : "realizations__boxOT--fromLeftThree",
          }));
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (observer && currentSection) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="realizacje" className={classes.realizations} ref={sectionRef}>
      <h2>Realizacje</h2>

      <div className={classes.realizations__box}>
        <div className={classes.realizations__boxOT}>
          <div className={classes.realizations__boxImg}>
            <Image
              className={classes.realizations__img}
              src={photo1}
              alt="Zdjęcie Kabe Tint&Leather"
            />
            <Link
              href="https://www.kabetintleather.pl/"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Przejdź </span>
            </Link>
          </div>
          <div className={classes.realizations__boxOne}>
            <h3>Kabe Tint&Leather</h3>
            <p>
              Usługi <span>przyciemniania szyb</span> samochodowych i
              <span> regeneracji tapicerki</span> skórzanej.
            </p>
          </div>
        </div>
        <div
          className={`${classes.realizations__boxOT} ${
            classes[animationClass.boxTwo]
          }`}
        >
          <div className={classes.realizations__boxImg}>
            <Image
              className={classes.realizations__img}
              src={photo2}
              alt="Zdjęcie Sea & Sun Sarbinowo"
            />
            <Link
              href="https://www.seasunsarbinowo.pl/"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Przejdź</span>
            </Link>
          </div>
          <div className={classes.realizations__boxOne}>
            <h3>Sea & Sun Sarbinowo</h3>
            <p>
              Nowo wybudowane, <span>klimatyzowane, komfortowe domki</span> na
              wynajem
            </p>
          </div>
        </div>
        <div
          className={`${classes.realizations__boxOT} ${
            classes[animationClass.boxThree]
          }`}
        >
          <div className={classes.realizations__boxImg}>
            <Image
              className={classes.realizations__img}
              src={Fazar}
              alt="Wizytówka firmy Fazar"
            />
            <button
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
              onClick={openModal}
            >
              <span>Przejdź</span>
            </button>
          </div>
          <div className={classes.realizations__boxOne}>
            <h3>Fazar</h3>
            <p>
              Wizytówka dla usług <span>elektrycznych</span> i{" "}
              <span>teletechnicznych</span>
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={classes.modal} onClick={closeModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={classes.close} onClick={closeModal}>
              <i className="fa fa-times"></i>
            </span>
            <Image
              src={vcardFazar}
              alt="Wizytówka Fazar"
              className={classes.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Realizations;
