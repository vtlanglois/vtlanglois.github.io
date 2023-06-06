import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Container, Fade, Row } from "reactstrap";
import "../../App.css";
import TabHeader from "../../components/about/ExperienceItem/TabHeader";
import WorkAccordian from "../../components/about/WorkAccordian/WorkAccordian";
const About = () => {
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
          <br />
          <Row>
            <TabHeader icon={faUser} title="About Me" />
            <p>
              I am an <b>Indiana University</b> graduate with a{" "}
              <b>Bachelor of Science in Computer Science</b> specializing in{" "}
              <b>Software Engineering</b>. I plan on building upon my love for
              learning, my interest in technology, and my education to develop a
              long-lasting software engineering career focused on building
              software that can make the world better in any way possible.
            </p>
            <p>
              In my free time, I enjoy playing video games, painting, cooking,
              and building Lego models. I also enjoy learning about any topic
              that interests me, from Foley sound design to mythology.
            </p>
            <p>
              I want to learn more about web design, so I decided to make my own
              website on Github Pages! This allows me to practice with
              Typescript and React through experimentation and learning from my
              mistakes. If you want a better idea of who I am, please go to my{" "}
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
              info may be missing and some design choices may be questionable.
            </p>
          </Row>
          <Row>
            <WorkAccordian />
          </Row>
        </Container>
      </body>
    </div>
  );
};
export default About;
