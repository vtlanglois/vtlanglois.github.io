import "../../App.css";
import WorkAccordian from "../../components/WorkAccordian/WorkAccordian";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import "./Education.css";
import TabHeader from "../../components/ExperienceItem/TabHeader";
import {
  faEgg,
  faKiwiBird,
  faCrow,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import SemesterItem from "../../components/academics/SemesterItem";
import AcademicYear from "../../components/academics/AcademicYear";
import { Semester } from "../../components/academics/DegreeInfo";
import {
  fall2019Semester,
  fall2020Semester,
  fall2021Semester,
  fall2022Semester,
  freshmanYear,
  juniorYear,
  seniorYear,
  sophomoreYear,
  spring2020Semester,
  spring2021Semester,
  spring2022Semester,
  spring2023Semester,
} from "../../components/academics/DetailedYears";

function Education() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Education</h1>
          <AcademicYear {...freshmanYear} />
          <br />
          <AcademicYear {...sophomoreYear} />
          <br />
          <AcademicYear {...juniorYear} />
          <br />
          <AcademicYear {...seniorYear} />
        </Container>
      </body>
    </div>
  );
}
export default Education;
