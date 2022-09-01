import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarBrand, NavLink } from "reactstrap";
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./WebsiteHeader.css"

const WebsiteHeader = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="#/">vincent langlois</NavbarBrand>
          <Nav className="ml-auto">
            <NavLink href="#/about">📖about</NavLink>
            <NavLink href="#/work">📁work</NavLink>
            <NavLink href="#/contact">✉️contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
}
export default WebsiteHeader;