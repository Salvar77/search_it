import classes from "./Nav.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const Nav = ({ isOpen, toggleNav }) => {
  let navClasses = classes.nav;

  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  const handleToggleNav = () => {
    if (windowWidth < 992) {
      toggleNav();
    }
  };
  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden className={classes.nav__item}>
            <li onClick={handleToggleNav}>
              <Link href="/#">Home</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#O-mnie">O mnie</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#realizacje">Realizacje</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#projekty">Projekty</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link href="/#kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
