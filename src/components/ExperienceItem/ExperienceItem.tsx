import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { Col, Container, Row } from "reactstrap";
import "./ExperienceItem.css";

interface ExperienceItemProps {
  title: string;
  location?: string;
  startMonth?: string;
  endMonth?: string;
  job?: string;
  details: Array<string>;
}

const ExperienceItem = ({
  title,
  location,
  startMonth,
  endMonth,
  job,
  details,
}: ExperienceItemProps) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h5>
              <b>{title}</b> {location}
            </h5>
            <h6>
              <i>{job}</i>
            </h6>
          </Col>
          <Col className="date">
            <h6>
              <i>
                {startMonth}-{endMonth}
              </i>
            </h6>
          </Col>
        </Row>
      </Container>

      <ul>
        {details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
    </div>
  );
};
export default ExperienceItem;
