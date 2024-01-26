import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <h2 className={classes.projects__header}>Projekty</h2>
      <div className={classes.projects__box}>
        <div className={classes.projects__boxOne}></div>
        <div className={classes.projects__boxTwo}></div>
        <div className={classes.projects__boxThree}></div>
      </div>
    </section>
  );
};

export default Projects;
