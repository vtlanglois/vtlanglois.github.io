import Button from "../components/Button";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        distinctio nobis perspiciatis nostrum itaque magnam reiciendis quisquam
        tempore veritatis vero recusandae nisi mollitia eligendi, aliquam amet
        cumque blanditiis est sit.
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
