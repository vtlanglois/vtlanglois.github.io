import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Collapse, NavbarBrand, NavbarToggler, NavLink } from "reactstrap";
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./WebsiteHeader.css"

const WebsiteHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand href="#/">vincent langlois</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink href="#/about">📖about</NavLink>
            <NavLink href="#/work">📁work</NavLink>
            <NavLink href="#/contact">✉️contact</NavLink>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
      </div>
    );
}
export default WebsiteHeader;