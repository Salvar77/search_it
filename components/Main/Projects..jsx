import classes from "./Projects.module.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaCube } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import Image from "next/image";
import photo1 from "../../assets/image/cubes.jpg";
import photo2 from "../../assets/image/about-blackholes-side-fifth.jpg";
import photo3 from "../../assets/image/naga_640.jpg";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projekty" className={classes.projects}>
      <h2 className={classes.projects__header}>Projekty</h2>
      <div className={classes.projects__box}>
        <div className={classes.projects__boxOne}>
          <div className={classes.projects__boxImg}>
            <Image
              src={photo1}
              alt="widok i opis projektów firmowych"
              className={classes.customImage}
            ></Image>
            <Link
              href="https://cube-self.vercel.app/"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Zobacz</span>
            </Link>
          </div>
          <h3>3D Cube</h3>
          <ul className={classes.projects__boxText}>
            <li>
              {" "}
              <FaCube className={classes.projects__boxIcon} />
              3D
            </li>
            <li>
              {" "}
              <IoLogoJavascript className={classes.projects__boxIcon} />
              JavaScript
            </li>
            <li>
              {" "}
              <FaHtml5 className={classes.projects__boxIcon} />
              HTML + <FaCss3Alt className={classes.projects__boxIcon} />
              SCSS
            </li>
          </ul>
        </div>
        <div className={classes.projects__boxTwo}>
          <div className={classes.projects__boxImg}>
            <Image
              src={photo2}
              alt="widok i opis projektów firmowych"
              className={classes.customImage}
            ></Image>
            <Link
              href="https://universe-alpha.vercel.app/"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Zobacz</span>
            </Link>
          </div>
          <h3>Universe Explorer</h3>
          <ul className={classes.projects__boxText}>
            <li>
              {" "}
              <FaHtml5 className={classes.projects__boxIcon} />
              HTML + <FaCss3Alt className={classes.projects__boxIcon} />
              SCSS
            </li>
            <li>
              {" "}
              <IoLogoJavascript className={classes.projects__boxIcon} />
              JavaScript
            </li>
            <li>1 tematyczny projekt</li>
          </ul>
        </div>
        <div className={classes.projects__boxThree}>
          <div className={classes.projects__boxImg}>
            <Image
              src={photo3}
              alt="widok i opis projektów firmowych"
              className={classes.customImage}
            ></Image>
            <Link
              href="https://first-app-blond.vercel.app/"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Zobacz</span>
            </Link>
          </div>
          <h3>ProtoShop Next</h3>
          <ul className={classes.projects__boxText}>
            <li>
              {" "}
              <FaReact className={classes.projects__boxIcon} />
              React
            </li>
            <li>
              {" "}
              <SiNextdotjs className={classes.projects__boxIcon} />
              Next.JS
            </li>
            <li>
              {" "}
              <CiRoute className={classes.projects__boxIcon} />
              Router
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
