import { Card, CardBody, Row, Col } from "reactstrap";

function TechSkills() {
  return (
    <div>
      <Card className="App-card">
        <CardBody>
          <Row>
            <Col>
              <ul>
                <li>
                  <b>Languages: </b>Java, C, PHP, Python, C#, R
                </li>
                <li>
                  <b>Web Dev: </b>Node.js, React, TypeScript, JavaScript, HTML/CSS
                  
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <b>Database: </b> PostgresSQL, MySQL, MongoDB
                </li>
                <li>
                  <b>Misc: </b>Agile, Git, GitHub, JIRA, Unix, Arduino
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
