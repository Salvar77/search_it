import { useState, useEffect } from "react";
import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Logo from "@/components/Nav/Logo";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;

      setShowLogo(!(windowWidth < 992 && currentScrollPos > 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <Logo showLogo={showLogo} />
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
      </header>
      <div className="app-background">
        {" "}
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}
