import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import { SelectEmoji } from "../EmojiSelector";
import "./WebsiteHeader.css";

function WebsiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const emoji = SelectEmoji();
  /**
          @TODO fixed weird visual on drag on mobile
         */
  return (
    <div>
      <Navbar className="banner" dark container="lg" expand="sm" fixed="top">
        <NavbarBrand className="brand-name" href="#/">
          <b>{emoji}vincent langlois</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {
              <NavLink className="brand-name" href="#/education">
                🎓education
              </NavLink>
            }
            {
              <NavLink className="brand-name" href="#/projects">
                🎨projects
              </NavLink>
            }
            {/* <NavLink href="#/contact">✉️contact</NavLink> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default WebsiteHeader;
