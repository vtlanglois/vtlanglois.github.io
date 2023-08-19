import { Container } from "reactstrap";
import AcademicYear from "../../components/academics/AcademicYear";
import {
  freshmanYear,
  juniorYear,
  seniorYear,
  sophomoreYear,
} from "../../components/academics/DetailedYears";
import "./Education.css";

function Education() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Education</h1>
          <AcademicYear {...freshmanYear} />
          <AcademicYear {...sophomoreYear} />
          <AcademicYear {...juniorYear} />
          <AcademicYear {...seniorYear} />
        </Container>
      </body>
    </div>
  );
}
export default Education;
