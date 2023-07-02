import {
  faBorderAll,
  faCode,
  faGamepad,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
import TabHeader from "../../components/about/ExperienceItem/TabHeader";
import {
  arProjects,
  ar_legocontroller,
  ar_medflow,
  ar_oledDemo,
  gdProjects,
  gd_atlasm1,
  gd_flockofcats,
  swProjects,
  sw_gwd,
  sw_pybot,
  sw_website,
  uiProjects,
  ui_cordiall,
  ui_websiteredesign,
} from "../../components/projects/DetailedProjects";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import styles from "./Projects.module.css"

function Projects() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Projects</h1>
          <TabHeader title="Software Engineering" icon={faCode} />
          <div className={styles.container}>
            {swProjects.map((project) => {
              return (<ProjectCard {...project} />)
            })}
          </div>
          <TabHeader title="UI/UX" icon={faBorderAll} />
          <div className={styles.container}>
            {uiProjects.map((project) => {
                return (<ProjectCard {...project} />)
              })}
          </div>
          <TabHeader title="Game Design & Development" icon={faGamepad} />
          <div className={styles.container}>
            {gdProjects.map((project) => {
              return (<ProjectCard {...project} />)
            })}
          </div>
          <TabHeader title="Arduino" icon={faGear} />
          <div className={styles.container}>
            {arProjects.map((project) => {
              return (<ProjectCard {...project} />)
            })}
          </div>
        </Container>
      </body>
    </div>
  );
}

export default Projects;
