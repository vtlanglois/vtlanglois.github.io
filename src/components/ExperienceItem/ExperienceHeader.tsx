
import { Container, Row, Col } from "reactstrap";


function ExperienceHeader(props: any) {
    return (
        <Container>
        <Row>
          <Col>
            <h5>
              <b>{props.title}</b> {props.location}
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
      </Container>
    );
}

export default ExperienceHeader;