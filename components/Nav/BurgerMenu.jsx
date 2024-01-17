import classes from "./BurgerMenu.module.scss";

const BurgerMenu = ({ isOpen, handleOpen }) => {
  const toggleActive = () => {
    handleOpen();
  };

  return (
    <div className={classes.hamburgerContainer}>
      <button
        className={`${classes.hamburger} ${classes.hamburger__arrow} ${
          isOpen ? classes.isActive : ""
        }`}
        type="button"
        onClick={toggleActive}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <span className={classes.hamburgerBox}>
          <span className={classes.hamburgerInner}></span>
        </span>
      </button>
    </div>
  );
};

export default BurgerMenu;
