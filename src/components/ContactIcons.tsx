import { Container} from "reactstrap";
import {Image} from "react-bootstrap"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../components/ContactIcons.css"

const ContactIcons = () => {
    return (
        <Container>
            <div className = "singleCol social-media-icons-white d-flex justify-content-evenly">
                <a href="https://www.linkedin.com/in/vtlanglois">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
                <a href="https://github.com/vtlanglois">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </Container >
    );
}

export default ContactIcons;