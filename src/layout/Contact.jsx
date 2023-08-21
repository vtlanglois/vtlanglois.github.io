import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <div>
      <SectionHeader className="contact-header" text={"Contact & Projects"} />
      <p>
        For professional inquiries or to connect, feel free to reach out to me on LinkedIn.
      </p>
      <p>
        <code>project page/section coming in later update. all projects are available on GitHub.</code>
      </p>
      <div className="button-container">
        <Button
          href="https://www.linkedin.com/in/vtlanglois/"
          label="LinkedIn"
        />
        <Button href="https://github.com/vtlanglois" label="GitHub" />
      </div>
    </div>
  );
};

export default Contact;
