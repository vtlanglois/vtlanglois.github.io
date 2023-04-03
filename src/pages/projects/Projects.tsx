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
function Projects() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Projects</h1>
          <TabHeader title="Software Engineering" icon={faCode} />
          <p>Brainstorm, My Website, Discord Bot, Xinu</p>
          <TabHeader title="UI/UX" icon={faBorderAll} />
          <p>Cordiall.gg, Cardinal</p>
          <ProjectCard />
          <TabHeader title="Game Design & Development" icon={faGamepad} />
          <p>Flock of Cats, ATLAS M-1</p>
          <TabHeader title="Arduino" icon={faGear} />
          <p>Lego Controller, Medicine Dispenser</p>
        </Container>
      </body>
    </div>
  );
}

export default Projects;
