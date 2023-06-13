import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import TabHeader from "../about/ExperienceItem/TabHeader";
import { Semester } from "./DegreeInfo";

// @TODO: #14 figure out why spacing looks off on mobile

// @TODO: #15 change arguments to props
function SemesterItem(props: Semester) {
  return (
    <div className="padding">
      <TabHeader title={props.title}/>
      {/* <ListGroup className="listgroup">
        <ListGroupItem className="listgroup nopadding">
          <Container>
            <Row>
              <Col>
                <b>Course</b>
              </Col>
              <Col>
                <b>Title</b>
              </Col>
              <Col>
                <b>Grade</b>
              </Col>
            </Row>
          </Container>
        </ListGroupItem>
        {props.classes.map((c) => {
          return (
            <ListGroupItem className="listgroup">
              <Container>
                <Row>
                  <Col>{c.number}</Col>
                  <Col>{c.title}</Col>
                  <Col>{c.grade}</Col>
                </Row>
              </Container>
            </ListGroupItem>
          );
        })}
      </ListGroup> */}
      <table>
        <tr>
          <td>Course</td>
          <td>Title</td>
          <td>Grade</td>
        </tr>
        {props.classes.map((c) => {
          return (
            <tr>
              <td>{c.number}</td>
              <td>{c.title}</td>
              <td>{c.grade}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default SemesterItem;
