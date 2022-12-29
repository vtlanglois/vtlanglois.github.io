import "../../App.css";
import WorkAccordian from "../../components/WorkAccordian/WorkAccordian";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Education.css";
import TabHeader from "../../components/ExperienceItem/TabHeader";
import { faEgg } from "@fortawesome/free-solid-svg-icons";
import SemesterItem from "../../components/academics/SemesterItem";
import AcademicYear from "../../components/academics/AcademicYear";
import { Semester } from "../../components/academics/DegreeInfo";

const fall2019Semester : Semester = {title: "Fall 2019", classes: [{ title: "AAA", number: "AAA", grade: "A" }]}

function Education() {
  return (
    <div>
      <body className="App-body">
        <AcademicYear title = "Freshman Year" icon = {faEgg} fallSemester = {fall2019Semester} springSemester = {fall2019Semester}/>
        <br />
        <AcademicYear title = "Sophmore Year" icon = {faEgg} fallSemester = {fall2019Semester} springSemester = {fall2019Semester}/>
        <br />
        <AcademicYear title = "Freshman Year" icon = {faEgg} fallSemester = {fall2019Semester} springSemester = {fall2019Semester}/>
        <br />
        <AcademicYear title = "Freshman Year" icon = {faEgg} fallSemester = {fall2019Semester} springSemester = {fall2019Semester}/>
      </body>
    </div>
  );
}
export default Education;
