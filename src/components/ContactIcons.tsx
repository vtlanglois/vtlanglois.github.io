import { Container} from "reactstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../components/ContactIcons.css"

const ContactIcons = () => {
    return (
        <Container>
            <div className = "singleCol d-flex justify-content-evenly">
                <a className="social-media-icons-white fa-linkedin" href="https://www.linkedin.com/in/vtlanglois">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
                <a className="social-media-icons-white fa-github" href="https://github.com/vtlanglois">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </Container >
    );
}

export default ContactIcons;