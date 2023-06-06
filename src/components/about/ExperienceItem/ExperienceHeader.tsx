import { Row, Col } from "reactstrap";
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
          <i>
            {props.startMonth}-{props.endMonth}
          </i>
        </h6>
      </Col>
    </Row>
  );
}

export default ExperienceHeader;
