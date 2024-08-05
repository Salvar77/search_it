import React from "react";
import { useState, useEffect, Suspense } from "react";
import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Logo from "@/components/Nav/Logo";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const BurgerMenu = React.lazy(() => import("@/components/Nav/BurgerMenu")); // Dynamiczne importowanie komponentu BurgerMenu

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
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {/* Dodanie Suspense dla obsługi ładowania komponentu */}
          <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
        </Suspense>
      </header>
      <div className="app-background">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}
