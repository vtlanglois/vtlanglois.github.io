import { Container} from "reactstrap";
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ContactIcons.css"

const ContactIcons = () => {
    return (
        <Container>
            <div className = "singleCol d-flex justify-content-evenly">
                <a className="social-media-icons-white fa-linkedin" href="https://www.linkedin.com/in/vtlanglois" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
                <a className="social-media-icons-white fa-github" href="https://github.com/vtlanglois" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </Container >
    );
}

export default ContactIcons;