import {
  faFileCode,
  faMicrochip,
  faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import {
  projectExperiences,
  workExperiences
} from "../DetailedExperiences";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import TabHeader from "../ExperienceItem/TabHeader";
import TechSkills from "../TechSkills";
import "./ExperienceList.css";


// @TODO: #13 add Resume and CV
function ExperienceList() {
  return (
    <div>

      <TabHeader icon={faSuitcase} removeUnderline={true} title="Work & Leadership Experience" />
      {workExperiences.map((w) => {
        return (
          <ExperienceItem {...w} />
        )
      })}

      <TabHeader icon={faFileCode} removeUnderline={true} title="Selected Projects" />
      {projectExperiences.map((p) => {
        return (
          <ExperienceItem {...p} />
        )
      })}

      <TabHeader icon={faMicrochip} removeUnderline={true} title="Technical Skills" />
      <TechSkills />
    </div>
  );
};

export default ExperienceList;
