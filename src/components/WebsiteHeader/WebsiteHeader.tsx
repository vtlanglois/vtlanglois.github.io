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

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const emoji = SelectEmoji();
  /**
          @TODO fixed weird visual on drag on mobile
         */
  return (
    <div>
      <Navbar className="banner" container="lg" expand="sm" fixed="top">
        <NavbarBrand className="brand-name">
          <b>{emoji}vincent langlois</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {/*<NavLink className="brand-name" href="#/about">📖about</NavLink>*/}
            {/*<NavLink className="brand-name" href="#/work">📁work</NavLink>*/}
            {/* <NavLink href="#/contact">✉️contact</NavLink> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default WebsiteHeader;
