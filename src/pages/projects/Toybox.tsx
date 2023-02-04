import { Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import "./Toybox.css";

function Toybox() {
  return (
    <div>
      <body className="App-body">
        <Container>
          <Row>
            <Card body className="cardgroup text-center">
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <Row>
                <Col>
                  <img alt="Card" src="https://picsum.photos/300/200" />
                </Col>
                <Col>
                  <p>AAA</p>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row>
            <Card body className="cardgroup text-center">
              <CardTitle tag="h1">ATLAS M-1</CardTitle>
              <Row>
                <Col>
                  <img alt="Card" src="https://picsum.photos/300/200" />
                </Col>
                <Col>
                  <p>AAA</p>
                </Col>
              </Row>
            </Card>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Toybox;
