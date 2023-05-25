import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import TabHeader from "../../components/ExperienceItem/TabHeader";
import {
  faCode,
  faBorderAll,
  faGamepad,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import { ar_legocontroller, ar_medflow, ar_oledDemo, gd_atlasm1, gd_flockofcats, sw_gwd, sw_pybot, sw_website, sw_xinu, ui_cardinal, ui_cordiall, ui_websiteredesign} from "../../components/projects/DetailedProjects";
function Projects() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Projects</h1>
          <TabHeader title="Software Engineering" icon={faCode} />
          {/* <ProjectCard {...sw_xinu}/><br/> */}
          <ProjectCard {...sw_pybot}/><br/>
          <ProjectCard {...sw_website}/><br/>
          <ProjectCard {...sw_gwd}/>
          <TabHeader title="UI/UX" icon={faBorderAll} />
          <ProjectCard {...ui_cordiall}/><br/>
          <ProjectCard {...ui_websiteredesign}/>
          {/* <ProjectCard {...ui_cardinal}/> */}
          <TabHeader title="Game Design & Development" icon={faGamepad} />
          <ProjectCard {...gd_flockofcats}/><br/>
          <ProjectCard {...gd_atlasm1}/>
          <TabHeader title="Arduino" icon={faGear} />
          <ProjectCard {...ar_oledDemo}/><br/>
          <ProjectCard {...ar_medflow}/><br/>
          <ProjectCard {...ar_legocontroller}/>
        </Container>
      </body>
    </div>
  );
}

export default Projects;
