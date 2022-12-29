import TabHeader from "../ExperienceItem/TabHeader";
import { Year } from "./DegreeInfo";
import SemesterItem from "./SemesterItem";

function AcademicYear(props: Year) {
    return (
        <div>
        <TabHeader icon={props.icon} title="Freshman Year" />
        <SemesterItem
          title="Fall 2019"
          classes={[
            { title: "AAA", number: "AAA", grade: "A" },
            { title: "AAA", number: "AAA", grade: "A" },
          ]}
        />
        <br />
        <SemesterItem
          title="Spring 2020"
          classes={[
            { title: "AAA", number: "AAA", grade: "A" },
            { title: "AAA", number: "AAA", grade: "A" },
          ]}
        />
        </div>
    );
}

export default AcademicYear;