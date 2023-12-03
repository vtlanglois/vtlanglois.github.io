import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <div>
      <SectionHeader className="contact-header">
        Contact & Projects
      </SectionHeader>
      <p>
        For professional inquiries or to connect, feel free to reach out to me on LinkedIn.
      </p>
      <p>
        <code>project page/section coming in later update. all projects are available on GitHub.</code>
      </p>
      <div className="button-container d-flex justify-content-lg-around justify-content-evenly">
          <Button
            className="linkedin-button"
            href="https://www.linkedin.com/in/vtlanglois/"
            label="LinkedIn"
            icon={faLinkedin}
          />
          <Button
            className="github-button"
            href="https://github.com/vtlanglois"
            label="GitHub"
            icon={faGithub}
          />
        </div>
      </div>
  );
};

export default Contact;
