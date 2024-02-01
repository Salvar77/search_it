import Link from "next/link";
import classes from "./Realizations.module.scss";
import Image from "next/image";
import photo1 from "../../assets/image/project-project.jpg";

const Realizations = () => {
  return (
    <section id="realizacje" className={classes.realizations}>
      <div>
        <h2>Realizacje</h2>

        <div className={classes.realizations__box}>
          <div className={classes.realizations__boxImg}>
            <Image src={photo1} alt="Zdjęcie"></Image>
            <Link
              href="#"
              className={`${classes.uiBtn} ${classes.imageOverlay}`}
            >
              <span>Zobacz</span>
            </Link>
          </div>
          <div className={classes.realizations__boxText}>
            <p>React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realizations;
