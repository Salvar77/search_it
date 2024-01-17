import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
      </header>
      <Component {...pageProps} />
    </>
  );
}
