import { Card, CardBody } from "reactstrap";
import { Semester } from "./DegreeInfo";

// @TODO: #14 figure out why spacing looks off on mobile

// @TODO: #15 change arguments to props
function SemesterItem(props: Semester) {
  return (
    <div className="padding">
      <Card className="App-card">
        <CardBody>
          <table>
            <tr>
              <th>
                <b>
                  <i>{props.title}</i>
                </b>
              </th>
            </tr>
            <tr>
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
                  <td>{c.grade}</td>
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
