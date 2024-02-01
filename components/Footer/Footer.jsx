import classes from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>
            &copy;{currentYear} Search IT
          </p>
        </div>
        <ul className={classes.footer__icons}>
          <li>
            <a
              href="https://www.facebook.com/nazwa"
              className="fab fa-facebook-f"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/twoja_nazwa/"
              className="fab fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
