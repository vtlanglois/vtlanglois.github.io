import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Page under construction!</h1>
          <hr />
          <Row>
            <Col>
            <Card body className="cardgroup text-center">
              <CardBody>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <p>AAA</p>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card body className="cardgroup text-center">
              <CardBody>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <p>AAA</p>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card body className="cardgroup text-center">
              <CardBody>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <p>AAA</p>
              </CardBody>
            </Card>
            </Col>
          </Row>
          <hr />
          <h1>Game Design & Development</h1>
          <hr />
          <Row>
            <Col>
            <Card body className="cardgroup text-center">
              <CardBody>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <p>Created as my final project for MSCH-G320, Altas M-1 is a 3-to-5 minute art and sound experience made for MSCH-G320 
                at Indiana University Bloomington for my Spring 2022 semester. 
                This experience was made to challenge me to make an unsettling atmosphere using SFX, ambiance, and visual effects.
              </p>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card body className="cardgroup text-center">
              <CardBody>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <p>AAA</p>
              </CardBody>
            </Card>
            </Col>
            <Col>
            <Card body className="cardgroup text-center">
              <CardBody>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <p>AAA</p>
              </CardBody>
            </Card>
            </Col>
          </Row>

        </Container>
      </body>
    </div>
  );
}

export default Projects;
