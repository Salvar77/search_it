import { useState } from "react";
import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Logo from "@/components/Nav/Logo";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <Logo />
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
