import {
  faFileCode,
  faMicrochip,
  faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import {
  pr_altas,
  pr_brainstorm,
  pr_cordiall,
  pr_website,
  wl_bcf,
  wl_lsec,
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
      <ExperienceItem {...wl_lsec} />
      <ExperienceItem {...wl_bcf} />

      <TabHeader icon={faFileCode} removeUnderline={true} title="Selected Projects" />
      <ExperienceItem {...pr_website} />
      <ExperienceItem {...pr_altas} />
      <ExperienceItem {...pr_cordiall} />
      <ExperienceItem {...pr_brainstorm} />

      <TabHeader icon={faMicrochip} removeUnderline={true} title="Technical Skills" />
      <TechSkills />
    </div>
  );
};

export default ExperienceList;
