import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { FaNpm } from "react-icons/fa";
import { SiGulp } from "react-icons/si";
import classes from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section id="skills" className={classes.aboutMe}>
      <div className={classes.aboutMe__boxes}>
        <div className={classes.aboutMe__boxesOne}>
          <h2 className={classes.aboutMe__header}>O mnie</h2>
          <p className={classes.aboutMe__text}>
            Jestem Łukasz. Web Developmentem zajmuje się od Września 2022 roku,
            a firma Search <span className={classes.span}> IT </span>zajmuje się
            <span className={classes.span}> tworzeniem stron WWW</span>, oraz
            <span className={classes.span}> aplikacji webowych</span>,
            dostosowanych{" "}
            <span className={classes.span}> do potrzeb Twojej firmy</span>.
          </p>
        </div>
        <div className={classes.aboutMe__boxesTwo}>
          <div className={classes.aboutMe__mainSkills}>
            <h2 className={classes.aboutMe__subTitle}>Umiejętności</h2>
            <p>
              <FaHtml5 className={classes.aboutMe__icon} />
              HTML
            </p>
            <p>
              <FaCss3Alt className={classes.aboutMe__icon} />
              SCSS
            </p>
            <p>
              <IoLogoJavascript className={classes.aboutMe__icon} />
              JavaScript
            </p>
            <p>
              <FaReact className={classes.aboutMe__icon} />
              React
            </p>
            <p>
              {" "}
              <SiNextdotjs className={classes.aboutMe__icon} /> NextJS
            </p>
            <p>
              {" "}
              <SiAdobeillustrator className={classes.aboutMe__icon} />
              Illustrator
            </p>
            <p>
              {" "}
              <SiAdobephotoshop className={classes.aboutMe__icon} />
              Photoshop
            </p>
            <p>
              {" "}
              <SiAdobexd className={classes.aboutMe__icon} /> AdobeXD
            </p>
          </div>
        </div>
        <div className={classes.aboutMe__boxesThree}>
          <div className={classes.aboutMe__additionalSkills}>
            <h3 className={classes.aboutMe__subTitle}>Pozostałe</h3>
            <p>
              {" "}
              <TbSeo className={classes.aboutMe__icon} />
              SEO
            </p>

            <p>
              {" "}
              <FaNpm className={classes.aboutMe__icon} />
              NPM
            </p>
            <p>
              {" "}
              <SiGulp className={classes.aboutMe__icon} />
              GULP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
