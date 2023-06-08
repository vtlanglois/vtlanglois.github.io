import {
  faGraduationCap,
  faMicrochip,
  faPalette,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";
import {
  pr_altas,
  pr_brainstorm,
  pr_cordiall,
  pr_website,
  wl_bcf,
  wl_lsec,
} from "../DetailedExperiences";
import ExperienceHeader from "../ExperienceItem/ExperienceHeader";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import TabHeader from "../ExperienceItem/TabHeader";
import "./ExperienceList.css";


// @TODO: #13 add Resume and CV

//@TODO: #9 Rename WorkAccordian to something more descriptive.
function ExperienceList() {
  return (
    <div className="body">

      <TabHeader icon={faSuitcase} removeUnderline={true} title="Work & Leadership Experience" />
      <ExperienceItem {...wl_lsec} />
      <ExperienceItem {...wl_bcf} />

      <TabHeader icon={faPalette} removeUnderline={true} title="Selected Projects" />
      <ExperienceItem {...pr_website} />
      <ExperienceItem {...pr_altas} />
      <ExperienceItem {...pr_cordiall} />
      <ExperienceItem {...pr_brainstorm} />

      <TabHeader icon={faMicrochip} removeUnderline={true} title="Technical Skills" />
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
