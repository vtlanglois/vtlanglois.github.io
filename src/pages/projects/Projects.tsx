import {
  faBorderAll,
  faCode,
  faGamepad,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
import TabHeader from "../../components/about/ExperienceItem/TabHeader";
import {
  ar_legocontroller,
  ar_medflow,
  ar_oledDemo,
  gd_atlasm1,
  gd_flockofcats,
  sw_gwd,
  sw_pybot,
  sw_website,
  ui_cordiall,
  ui_websiteredesign,
} from "../../components/projects/DetailedProjects";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
function Projects() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Projects</h1>
          <TabHeader title="Software Engineering" icon={faCode} />
          {/* <ProjectCard {...sw_xinu}/><br/> */}
          <ProjectCard {...sw_pybot} />
          <ProjectCard {...sw_website} />
          <ProjectCard {...sw_gwd} />
          <TabHeader title="UI/UX" icon={faBorderAll} />
          <ProjectCard {...ui_cordiall} />
          <ProjectCard {...ui_websiteredesign} />
          {/* <ProjectCard {...ui_cardinal}/> */}
          <TabHeader title="Game Design & Development" icon={faGamepad} />
          <ProjectCard {...gd_flockofcats} />
          <ProjectCard {...gd_atlasm1} />
          <TabHeader title="Arduino" icon={faGear} />
          <ProjectCard {...ar_oledDemo} />
          <ProjectCard {...ar_medflow} />
          <ProjectCard {...ar_legocontroller} />
        </Container>
      </body>
    </div>
  );
}

export default Projects;
