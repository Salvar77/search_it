import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo.svg";

const Logo = () => {
  return (
    <Image
      className={classes.logo}
      src={logo}
      alt="Logo firmy Search IT"
      priority
      width={195}
      height={195}
    />
  );
};

export default Logo;
