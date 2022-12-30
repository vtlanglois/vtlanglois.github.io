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
  fall2021Semester,
  fall2022Semester,
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
        <AcademicYear
          title="Freshman Year"
          icon={faEgg}
          fallSemester={fall2019Semester}
          springSemester={spring2020Semester}
        />
        <br />
        <AcademicYear
          title="Sophomore Year"
          icon={faKiwiBird}
          fallSemester={fall2020Semester}
          springSemester={spring2021Semester}
        />
        <br />
        <AcademicYear
          title="Junior Year"
          icon={faCrow}
          fallSemester={fall2021Semester}
          springSemester={spring2022Semester}
        />
        <br />
        <AcademicYear
          title="Senior Year"
          icon={faDove}
          fallSemester={fall2022Semester}
          springSemester={spring2023Semester}
        />
        </Container>
      </body>
    </div>
  );
}
export default Education;
