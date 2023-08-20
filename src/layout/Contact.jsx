import Button from "../components/Button";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        For professional inquiries or to connect, feel free to reach out to me on LinkedIN or Github.
      </p>
      <div className="button-container">
        <Button
          href="https://www.linkedin.com/in/vtlanglois/"
          label="LinkedIN"
        />
        <Button href="https://github.com/vtlanglois" label="GitHub" />
      </div>
    </div>
  );
};

export default Contact;
