import "../../App.css";
import {
  Container
} from "reactstrap";
import "./Education.css";
import AcademicYear from "../../components/academics/AcademicYear";
import {
  freshmanYear,
  juniorYear,
  seniorYear,
  sophomoreYear
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
