import "../App.css";
import WorkAccordian from "../components/WorkAccordian/WorkAccordian";
import TabHeader from "../components/ExperienceItem/TabHeader";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Container, Fade, Row } from "reactstrap";
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
              I am a senior at <b>Indiana University</b> pursuing a{" "}
              <b>BS in Computer Science</b> with a specialization in{" "}
              <b>Software Engineering</b>. I plan on building upon my love for
              learning, my interest in technology, and my education to develop a
              long-lasting software engineering career focused on building
              systems that can make the world better in any way possible.
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
              <a href="https://www.linkedin.com/in/vtlanglois/">LinkedIn</a>{" "}
              page.
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
