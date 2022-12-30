import { faEgg } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";
import TabHeader from "../ExperienceItem/TabHeader";
import { Semester } from "./DegreeInfo";
import "./SemesterItem.css"

function SemesterItem({ title, classes }: Semester) {
  return (
    <div>
    <TabHeader title={title} removeUnderline={true}/>
    <ListGroup className="listgroup">
      <ListGroupItem className="listgroup nopadding">
        <Container>
          <Row>
            <Col>
              <b>Course</b>
            </Col>
            <Col>
              <b>Title</b>
            </Col>
            <Col className="align-right">
              <b>Grade</b>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
      {classes.map((c) => {
        return (
          <ListGroupItem className="listgroup nopadding">
            <Container>
              <Row>
                <Col>{c.number}</Col>
                <Col>{c.title}</Col>
                <Col className="align-right">{c.grade}</Col>
              </Row>
            </Container>
          </ListGroupItem>
        );
      })}
    </ListGroup>
    </div>
  );
}

export default SemesterItem;
