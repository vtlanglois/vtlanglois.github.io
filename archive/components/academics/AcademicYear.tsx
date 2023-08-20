import TabHeader from "../about/ExperienceItem/TabHeader";
import { Year } from "./DegreeInfo";
import SemesterItem from "./SemesterItem";

function AcademicYear(props: Year) {
  return (
    <div>
      <TabHeader icon={props.icon} title={props.title} />
      {/* @TODO: make `SemesterItem` use a spread operator. */}
      <SemesterItem
        title={props.fallSemester.title}
        classes={props.fallSemester.classes}
      />
      <SemesterItem
        title={props.springSemester.title}
        classes={props.springSemester.classes}
      />
    </div>
  );
}

export default AcademicYear;
