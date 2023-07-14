import { faFileCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import LogoIcon from "../LogoIcon/LogoIcon";
import "./WebsiteHeader.css";

function WebsiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /**
          @TODO fixed weird visual on drag on mobile
         */
  return (
    <div>
      <Navbar className="banner" dark container="lg" expand="sm" fixed="top">
        <NavbarBrand className="brand-name" href="#/">
          <LogoIcon />
          <b className="brand-name">Vincent Langlois</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
              <NavLink href="#/education">
                <b className="brand-name">Education</b>
              </NavLink>
              <NavLink href="#/projects">
                <b className="brand-name">Projects</b>
              </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default WebsiteHeader;
