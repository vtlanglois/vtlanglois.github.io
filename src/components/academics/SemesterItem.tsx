import {
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import TabHeader from "../about/ExperienceItem/TabHeader";
import { Semester } from "./DegreeInfo";

// @TODO: #14 figure out why spacing looks off on mobile

// @TODO: #15 change arguments to props
function SemesterItem(props: Semester) {
  return (
    <div className="padding">
      <TabHeader title={props.title} />
      <Card className="App-card">
        <CardBody>
          <table>
            <tr className="table-header">
              <th>
                <b>Course</b>
              </th>
              <th>
                <b>Title</b>
              </th>
              <th>
                <b>Grade</b>
              </th>
            </tr>
            {props.classes.map((c) => {
              return (
                <tr>
                  <td>{c.number}</td>
                  <td>{c.title}</td>
                  <td >{c.grade}</td>
                </tr>
              );
            })}
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default SemesterItem;
