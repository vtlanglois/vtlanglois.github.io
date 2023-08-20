import { Card, CardBody } from "reactstrap";
import { ExperienceDetails } from "../DetailedExperiences";
import ExperienceHeader from "./ExperienceHeader";
import "./ExperienceItem.css";
import "../../../App.css"

function ExperienceItem(props: ExperienceDetails) {
  return (
    <div>
      <Card className="App-card">
        <CardBody >
      <ExperienceHeader {...props} />

      <ul>
        {props.details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
      </CardBody>
      </Card>
    </div>
  );
}
export default ExperienceItem;
