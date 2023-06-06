import { ExperienceDetails } from "../DetailedExperiences";
import ExperienceHeader from "./ExperienceHeader";
import "./ExperienceItem.css";

function ExperienceItem(props: ExperienceDetails) {
  return (
    <div>
      <ExperienceHeader {...props} />

      <ul>
        {props.details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
    </div>
  );
}
export default ExperienceItem;
