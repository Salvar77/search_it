import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo.svg";

const Logo = ({ showLogo }) => {
  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  };

  return (
    <div style={logoStyle} className={classes.logo}>
      <Image src={logo} alt="Logo firmy Search IT" priority />
    </div>
  );
};

export default Logo;
