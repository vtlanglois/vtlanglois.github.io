import { Container} from "reactstrap";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ContactIcons.css"
import { GetDate, SelectSplash } from "../EmojiSelector";

const ContactIcons = () => {

    const splashText = SelectSplash();
    const currentYear = GetDate();
    return (
        <div>
        <Container>
            <div className = "singleCol d-flex justify-content-evenly">
                <a className="social-media-icons-white fa-linkedin" href="https://www.linkedin.com/in/vtlanglois" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a className="social-media-icons-white fa-github" href="https://github.com/vtlanglois" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a className="social-media-icons-white fa-email" href="https://github.com/vtlanglois" target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </div>
        </Container >
            <div className = "bottom-text d-flex justify-content-evenly">
                vincent langlois - {splashText} - {currentYear}
            </div>
            <br />
        </div>
    );
}

export default ContactIcons;