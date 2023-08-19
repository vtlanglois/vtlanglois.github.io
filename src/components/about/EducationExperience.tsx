import { Card, CardBody, Row, Col } from "reactstrap";
import ExperienceHeader from "./ExperienceItem/ExperienceHeader";

function EducationExperience() {
    
    
    return (
        <div>
        <Card className="App-card">
            <CardBody>
              <ExperienceHeader
                title="Indiana University"
                location="Bloomington, IN"
                job="Bachelors of Science in Computer Science"
                startMonth="August 2019"
                endMonth="May 2023"
              />
              {/* @TODO: #11 find a way to solve empty space in Row/Cols */}
              <Row>
                <Col>
                  <ul>
                    <li>
                      <b>Specialization: </b>Software Engineering
                    </li>
                    <li>
                      <b>Studied Topics: </b>Game Development, Computer Systems,
                      UI/UX Design, CS Education
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>
                      <b>Minor: </b>Game Design
                    </li>
                    <li>
                      <b>GPA: </b>3.77/4.00
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
    )
}

export default EducationExperience;