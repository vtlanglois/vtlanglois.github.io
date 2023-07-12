import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
  Container,
  Fade,
  Row,
} from "reactstrap";
import TabHeader from "../../components/about/ExperienceItem/TabHeader";
import ExperienceList from "../../components/about/ExperienceList/ExperienceList";
import "../../App.css";
import ExperienceHeader from "../../components/about/ExperienceItem/ExperienceHeader";
import EducationExperience from "../../components/about/EducationExperience";
import CV from "./vincent-langlois-cv.pdf"


function About() {
  return (
    <div className="red">
      <body className="App-body">
        <Container>
          <Row md="auto">
            <Fade>
              <h1>
                Hello! I'm{" "}
                <b>
                  <u>Vincent Langlois</u>
                </b>
                , a software engineer who loves to learn.
              </h1>
            </Fade>
          </Row>
          <TabHeader icon={faUser} removeUnderline={true} title="About Me" />
          <Card className="App-card">
            <CardBody>
              <Row>
                <p>
                  I am an <b>Indiana University</b> graduate with a{" "}
                  <b>Bachelor of Science in Computer Science</b> specializing in{" "}
                  <b>Software Engineering</b>. I plan on building upon my love
                  for learning, my interest in technology, and my education to
                  develop a long-lasting software engineering career focused on
                  building software that can make the world better in any way
                  possible.
                </p>
                <p>
                  In my free time, I enjoy playing video games, painting,
                  cooking, and building Lego models. I also enjoy learning about
                  any topic that interests me, from Foley sound design to
                  mythology.
                </p>
                <ButtonToolbar>
                  <a href={CV} download="vincent-langlois-cv"><Button>Download CV</Button></a>
                </ButtonToolbar>
              </Row>
            </CardBody>
          </Card>
          <TabHeader
            icon={faGraduationCap}
            removeUnderline={true}
            title="Education"
          />
          <EducationExperience />
          <Row>
            <ExperienceList />
          </Row>
        </Container>
      </body>
    </div>
  );
}
export default About;
