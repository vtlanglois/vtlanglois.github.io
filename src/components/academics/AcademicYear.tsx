import TabHeader from "../ExperienceItem/TabHeader";
import { Year } from "./DegreeInfo";
import SemesterItem from "./SemesterItem";

function AcademicYear(props: Year) {
    return (
        <div>
        <TabHeader icon={props.icon} title={props.title} />
        <SemesterItem
          title={props.fallSemester.title}
          classes={props.fallSemester.classes}
        />
        <br />
        <SemesterItem
          title={props.springSemester.title}
          classes={props.springSemester.classes}
        />
        </div>
    );
}

export default AcademicYear;