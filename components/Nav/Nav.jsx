import classes from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ isOpen }) => {
  let navClasses = classes.nav;

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }
  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden className={classes.menu}>
            <li>
              <Link href="/#O-mnie">O mnie</Link>
            </li>
            <li>
              <Link href="/#projekty">Projekty</Link>
            </li>
            <li>
              <Link href="/#realizacje">Realizacje</Link>
            </li>
            <li>
              <Link href="/#kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
