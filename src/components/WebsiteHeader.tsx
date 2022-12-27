import { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink } from "reactstrap";
import { SelectEmoji } from "./EmojiSelector";
import "./WebsiteHeader.css"

const WebsiteHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const emoji = SelectEmoji();
          /**
          @TODO fixed weird visual on drag on mobile
         */
    return (
        <div>
        <Navbar dark color="dark" container="lg" expand="sm" fixed="top">
          <NavbarBrand className="brand-name"><b>{emoji}vincent langlois</b></NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavLink href="#/about">📖about</NavLink>
            <NavLink href="#/work">📁work</NavLink>
            {/* <NavLink href="#/contact">✉️contact</NavLink> */}
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
}
export default WebsiteHeader;