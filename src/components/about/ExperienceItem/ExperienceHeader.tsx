import { Col, Row } from "reactstrap";
import { ExperienceDetails } from "../DetailedExperiences";

function ExperienceHeader(props: ExperienceDetails | any) {
  function checkComma(): string {
    let value = ",";
    //if theres NO location
    if (!props.location) {
      value = "";
    }

    return value;
  }

  function generateDates(): string {
    let date = "";
    //if this prop has value
    if (props.startMonth) date += props.startMonth;
    if (props.startYear) date += " " + props.startYear;
    if (props.endMonth) date += "-" + props.endMonth;
    if (props.endYear) date += " " + props.endYear;
    return date;
  }

  return (
    <Row>
      <Col>
        <h5>
          <u>
            <b>
              {props.title}
              {checkComma()}
            </b>
          </u>{" "}
          {props.location}
        </h5>
        <h6>
          <i>{props.job}</i>
        </h6>
      </Col>
      <Col className="date">
        <h6>
          <i>{generateDates()}</i>
        </h6>
      </Col>
    </Row>
  );
}

export default ExperienceHeader;
