import React from "react";
import Slider from "react-slick";
import classes from "./Projects.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaCube } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { CiRoute } from "react-icons/ci";
import Image from "next/image";
import photo1 from "../../assets/image/cubes.jpg";
import photo2 from "../../assets/image/about-blackholes-side-fifth.jpg";
import photo3 from "../../assets/image/naga_640.jpg";
import ecommerceFrontEnd from "../../assets/image/image1.png";
import ecommerceAdminPanel from "../../assets/image/efinal1.png";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          mobileFirst: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section id="projekty" className={classes.projects}>
      <h2 className={classes.projects__header}>Projekty</h2>
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          <div className={classes.projects__boxFour}>
            <div className={classes.projects__boxImg}>
              <Image
                src={ecommerceAdminPanel}
                alt="widok i opis projektów firmowych"
                className={classes.customImage}
              ></Image>
              <Link
                href="https://efinal-admin.vercel.app/"
                className={`${classes.uiBtn} ${classes.imageOverlay}`}
              >
                <span>Przejdź</span>
              </Link>
            </div>
            <h3>ecommerceAdmin</h3>
            <ul className={classes.projects__boxText}>
              <li>
                <FaReact className={classes.projects__boxIcon} />
                React
              </li>
              <li>
                <SiNextdotjs className={classes.projects__boxIcon} />
                Next.JS
              </li>
              <li>
                <CiRoute className={classes.projects__boxIcon} />
                Router
              </li>
            </ul>
          </div>
          <div className={classes.projects__boxFour}>
            <div className={classes.projects__boxImg}>
              <Image
                src={ecommerceFrontEnd}
                alt="widok i opis projektów firmowych"
                className={classes.customImage}
              ></Image>
              <Link
                href="https://efinal-front-teal.vercel.app/"
                className={`${classes.uiBtn} ${classes.imageOverlay}`}
              >
                <span>Przejdź</span>
              </Link>
            </div>
            <h3>ecommerceFront</h3>
            <ul className={classes.projects__boxText}>
              <li>
                <FaReact className={classes.projects__boxIcon} />
                React
              </li>
              <li>
                <SiNextdotjs className={classes.projects__boxIcon} />
                Next.JS
              </li>
              <li>
                <CiRoute className={classes.projects__boxIcon} />
                Router
              </li>
            </ul>
          </div>
          <div className={classes.projects__boxOne}>
            <div className={classes.projects__boxImg}>
              <Image
                src={photo1}
                alt="widok i opis projektów firmowych"
                className={classes.customImage}
              ></Image>
              <Link
                href="https://cube-cube.vercel.app/"
                className={`${classes.uiBtn} ${classes.imageOverlay}`}
              >
                <span>Przejdź</span>
              </Link>
            </div>
            <h3>3D Cube</h3>
            <ul className={classes.projects__boxText}>
              <li>
                <FaCube className={classes.projects__boxIcon} />
                3D
              </li>
              <li>
                <IoLogoJavascript className={classes.projects__boxIcon} />
                JavaScript
              </li>
              <li>
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
                <span>Przejdź</span>
              </Link>
            </div>
            <h3>Universe Explorer</h3>
            <ul className={classes.projects__boxText}>
              <li>
                <FaHtml5 className={classes.projects__boxIcon} />
                HTML
              </li>
              <li>
                <FaCss3Alt className={classes.projects__boxIcon} />
                SCSS
              </li>
              <li>
                <IoLogoJavascript className={classes.projects__boxIcon} />
                JavaScript
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`${classes.slickArrow} ${classes.slickNext}`}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`${classes.slickArrow} ${classes.slickPrev}`}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

export default Projects;
