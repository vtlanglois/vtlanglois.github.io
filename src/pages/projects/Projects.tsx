import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <h1>Page under construction!</h1>
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

        </Container>
      </body>
    </div>
  );
}

export default Projects;
