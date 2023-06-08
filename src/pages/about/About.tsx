import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Col, Container, Fade, Row } from "reactstrap";
import TabHeader from "../../components/about/ExperienceItem/TabHeader";
import ExperienceList from "../../components/about/ExperienceList/ExperienceList";
import "../../App.css";
import ExperienceHeader from "../../components/about/ExperienceItem/ExperienceHeader";

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
                <p>
                  I want to learn more about web design, so I decided to make my
                  own website on Github Pages! This allows me to practice with
                  Typescript and React through experimentation and learning from
                  my mistakes. If you want a better idea of who I am, please go
                  to my{" "}
                  <a
                    className="App-link"
                    href="https://www.linkedin.com/in/vtlanglois/"
                  >
                    LinkedIn
                  </a>{" "}
                  page.
                </p>
                <p>
                  <b>IMPORTANT: </b> I'm planning on redoing the whole website,
                  including it's layout and code, after I graduate from IU. Some
                  info may be missing and some design choices may be
                  questionable.
                </p>
              </Row>
            </CardBody>
          </Card>
          <TabHeader
            icon={faGraduationCap}
            removeUnderline={true}
            title="Education"
          />
          {/* @TODO: #24 rework Education to something else. */}

          <Card className="App-card">
            <CardBody>
              <ExperienceHeader
                title="Indiana University"
                location="Bloomington, IN"
                job="Bachelors of Science in Computer Science"
                startMonth="August 2019"
                endMonth="May 2023"
              />
              {/* @TODO: #11 find a way to solve empty space in Row/Cols */}
              <Row>
                <Col>
                  <ul>
                    <li>
                      <b>Specialization: </b>Software Engineering
                    </li>
                    <li>
                      <b>Studied Topics: </b>Game Development, Computer Systems,
                      UI/UX Design, CS Education
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>
                      <b>Minor: </b>Game Design
                    </li>
                    <li>
                      <b>GPA: </b>3.84/4.00
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Row>
            <ExperienceList />
          </Row>
        </Container>
      </body>
    </div>
  );
}
export default About;
