import "../../App.css";
import WorkAccordian from "../../components/WorkAccordian/WorkAccordian";
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
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
  spring2020Semester,
  spring2021Semester,
} from "../../components/academics/DetailedYears";


function Education() {
  return (
    <div>
      <body className="App-body">
        <AcademicYear
          title="Freshman Year"
          icon={faEgg}
          fallSemester={fall2019Semester}
          springSemester={spring2020Semester}
        />
        <br />
        <AcademicYear
          title="Sophmore Year"
          icon={faKiwiBird}
          fallSemester={fall2020Semester}
          springSemester={spring2021Semester}
        />
        <br />
        <AcademicYear
          title="Junior Year"
          icon={faCrow}
          fallSemester={fall2019Semester}
          springSemester={fall2019Semester}
        />
        <br />
        <AcademicYear
          title="Senior Year"
          icon={faDove}
          fallSemester={fall2019Semester}
          springSemester={fall2019Semester}
        />
      </body>
    </div>
  );
}
export default Education;
