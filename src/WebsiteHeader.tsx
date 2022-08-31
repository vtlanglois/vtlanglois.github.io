import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const WebsiteHeader = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#/about">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/features">Features</Nav.Link>
            <Nav.Link href="#/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
}
export default WebsiteHeader;