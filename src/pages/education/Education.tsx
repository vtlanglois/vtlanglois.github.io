import "../../App.css";
import WorkAccordian from "../../components/WorkAccordian/WorkAccordian";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Education.css";
import TabHeader from "../../components/ExperienceItem/TabHeader";
import { faEgg } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <div>
      <body className="App-body">
        <ListGroup flush className="listgroup">
          <ListGroupItem className="listgroup nopadding">
            <Container>
              <Row>
                <TabHeader icon={faEgg} title="Freshman Year" />
              </Row>
              <Row>
                <Col>
                  <b>Hi</b>
                </Col>
                <Col>
                  <b>Hi</b>
                </Col>
                <Col>
                  <b>Hi</b>
                </Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem className="listgroup nopadding">
            <Container>
              <Row>
                <Col>Hi</Col>
                <Col>Hi</Col>
                <Col>Hi</Col>
              </Row>
            </Container>
          </ListGroupItem>
          <ListGroupItem className="listgroup">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem className="listgroup">Morbi leo risus</ListGroupItem>
          <ListGroupItem className="listgroup">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem className="listgroup">
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </body>
    </div>
  );
}
export default Education;
