import Link from "next/link";
import classes from "./Realizations.module.scss";
import Image from "next/image";
import photo1 from "../../assets/image/hero2_640.jpg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaCube } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";

const Realizations = () => {
  return (
    <section id="realizacje" className={classes.realizations}>
      <h2>Realizacje</h2>

      <div className={classes.realizations__box}>
        <div className={classes.realizations__boxOne}>
          <div className={classes.realizations__boxImg}>
            <Image src={photo1} alt="Zdjęcie"></Image>
            <Link
              href="https://www.kabetintleather.pl/"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Zobacz</span>
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
      </div>
    </section>
  );
};

export default Realizations;

// <ul className={classes.projects__boxText}>
//                 <li>
//                   {" "}
//                   <FaReact className={classes.realizations__boxIcon} />
//                   React
//                 </li>
//                 <li>
//                   {" "}
//                   <SiNextdotjs className={classes.realizations__boxIcon} />
//                   Next.JS
//                 </li>
//                 <li>
//                   {" "}
//                   <CiRoute className={classes.realizations__boxIcon} />
//                   Router
//                 </li>
//               </ul>
