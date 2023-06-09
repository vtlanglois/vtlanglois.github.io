import { Card, CardBody, Row, Col } from "reactstrap";
import "../../App.css"

function TechSkills() {
  return (
    <div>
      <Card className="App-card">
        <CardBody>
          <Row>
            <Col>
              <ul>
                <li>
                  <b>Languages: </b>Java, C/C++, PHP, Python, C#, R
                </li>
                <li>
                  <b>Web &#38; Database: </b>TypeScript, React, XML, JSON,
                  PostgresSQL, MySQL
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <b>Frameworks: </b>Android, Spring Boot
                </li>
                <li>
                  <b>Misc: </b>Agile, Git, GitHub, JIRA, Unix, Unity, Godot
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default TechSkills;
