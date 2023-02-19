import ExperienceItem from "../ExperienceItem/ExperienceItem";
import "./WorkAccordian.css";
import {
  faGraduationCap,
  faSuitcase,
  faPalette,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import ExperienceHeader from "../ExperienceItem/ExperienceHeader";
import TabHeader from "../ExperienceItem/TabHeader";
import { Col, Row } from "reactstrap";
const WorkAccordian = () => {
  return (
    <div className="body">
      <TabHeader icon={faGraduationCap} title="Education" />
      <ExperienceHeader
        title="Indiana University,"
        location="Bloomington, IN"
        job="Bachelors of Science in Computer Science"
        startMonth="August 2019"
        endMonth="May 2023"
      />
      <Row>
        <Col>
          <ul>
            <li>
              <b>Specialization: </b>Software Engineering
            </li>
            <li>
              <b>Studied Topics: </b>Game Development, Computer Systems, UI/UX Design
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
      <TabHeader icon={faSuitcase} title="Work & Leadership Experience" />
      <ExperienceItem
        title="Luddy School of Informatics, Computing, and Engineering,"
        location="IU, Bloomington, IN"
        job="Student Engagement & Outreach Intern"
        startMonth="September 2020"
        endMonth="Ongoing"
        details={[
          "Collaborate with student-led committee to promote student engagement and success throughout Luddy by creating events and opportunities for students to network and get involved",
          "Coordinate and administer events with 200+ students and participating faculty in attendance",
          "Assist with student organizations for event planning and promotion",
          "Leads student outreach division of the Luddy Student Engagement Committee",
          "Design and develop educational and entertaining computer science lesson plans using block-based programming, virtual worlds, and physical robots",
          "Train and guide volunteers on lesson materials and educational tools to ensure excellent performance at our events",
        ]}
      />
      <ExperienceItem
        title="BCForward,"
        location="Carmel, IN"
        job="Software Engineering Intern"
        startMonth="May 2022"
        endMonth="August 2022"
        details={[
          "Worked remotely in a 7-person team developing the Indiana Prosecutor Case Management System",
          "Created quality-of-life features that reduced customer service requests for account-related issues by the hundreds",
          "Developed features using a React frontend, PHP backend, and MySQL databases",
        ]}
      />

      <TabHeader icon={faPalette} title="Selected Projects" />
      <ExperienceItem
        title="Personal Website"
        startMonth="September 2022"
        endMonth="Ongoing"
        details={[
          "Working on a personal website to provide more information about myself beyond my LinkedIN profile",
          "Serving as a way to learn more about web development and front-end programming",
          "Developing using React, Typescript, and Reactstrap, hosted on Github Pages",
        ]}
      />
      <ExperienceItem
        title="ATLAS M-1"
        startMonth="March 2022"
        endMonth="May 2022"
        details={[
          "Designed a short, immersive video game experience about being stuck on the ocean floor inside a submarine with monsters approaching the vessel",
          "Mixed audio to create an eerie atmosphere, sampling old radios, monster screams, and groaning metal",
          "Programmed necessary systems to allow for eerie atmosphere to engage players, including submarine controls and audio systems",
        ]}
      />
      <ExperienceItem
        title="Cordiall.gg"
        startMonth="February 2022"
        endMonth="May 2022"
        details={[
          "Created a framework for a website focused on providing information about accessibility options present in certain videos to aid disabled and competitive gamers and their needs",
          "Led a 4-person team in designing the Figma prototype and ensuring the projects accessibility goals and deadlines were met",
          "Conducted interviews and usability tests to understand the needs of our customers and test our design decisions",
        ]}
      />
      <ExperienceItem
        title="Brainstorm"
        startMonth="September 2021"
        endMonth="December 2021"
        job="Fullstack Software Engineer"
        details={[
          "Created a learning management system web application focused on increasing K-8th grade student engagement through gamified learning",
          "Collaborated with 4-person team using Agile software development methodology over 5 two-week sprints",
          "Developed using Java Spring Boot, React, and PostgreSQL",
        ]}
      />

      <TabHeader icon={faMicrochip} title="Technical Skills" />
      {/* <ul>
        <li>
          <b>Languages: </b>Java, C/C++, PHP, Python, C#, R
        </li>
        <li>
          <b>Web &#38; Database: </b>TypeScript, React, XML, JSON, PostgresSQL,
          MySQL
        </li>
        <li>
          <b>Frameworks: </b>Android, Spring Boot
        </li>
        <li>
          <b>Misc: </b>Agile, Git, GitHub, JIRA, Unix, Unity, Godot
        </li>
      </ul> */}
      <Row>
        <Col>
          <ul>
            <li>
              <b>Languages: </b>Java, C/C++, PHP, Python, C#, R
            </li>
            <li>
              <b>Web &#38; Database: </b>TypeScript, React, XML, JSON,
              PostgresSQL, MySQL
            </li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              <b>Frameworks: </b>Android, Spring Boot
            </li>
            <li>
              <b>Misc: </b>Agile, Git, GitHub, JIRA, Unix, Unity, Godot
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default WorkAccordian;
