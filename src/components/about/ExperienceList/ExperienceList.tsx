import ExperienceItem from "../ExperienceItem/ExperienceItem";
import "./ExperienceList.css";
import {
  faGraduationCap,
  faSuitcase,
  faPalette,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import ExperienceHeader from "../ExperienceItem/ExperienceHeader";
import TabHeader from "../ExperienceItem/TabHeader";
import { Col, Row } from "reactstrap";
import {
  pr_altas,
  pr_brainstorm,
  pr_cordiall,
  pr_website,
  wl_bcf,
  wl_lsec,
} from "../DetailedExperiences";

// @TODO: #13 add Resume and CV

//@TODO: #9 Rename WorkAccordian to something more descriptive.
function ExperienceList() {
  return (
    <div className="body">
      <TabHeader icon={faGraduationCap} title="Education" />
      {/* @TODO: #24 rework Education to something else. */}
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
              <b>Studied Topics: </b>Game Development, Computer Systems, UI/UX
              Design, CS Education
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
      <ExperienceItem {...wl_lsec} />
      <ExperienceItem {...wl_bcf} />

      <TabHeader icon={faPalette} title="Selected Projects" />
      <ExperienceItem {...pr_website} />
      <ExperienceItem {...pr_altas} />
      <ExperienceItem {...pr_cordiall} />
      <ExperienceItem {...pr_brainstorm} />

      <TabHeader icon={faMicrochip} title="Technical Skills" />
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

export default ExperienceList;
