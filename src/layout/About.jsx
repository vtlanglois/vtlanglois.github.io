import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import CV from "../vincent-langlois-cv.pdf"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="intro-container">
              <h1>Hi! 👋😄</h1>
              <h1>I'm Vincent Langlois.</h1>
              <h2>I build things, often using</h2>
              <h2>
                <code>{"[arrays,]"}</code> and <code>{"{...objects}"}</code>.
              </h2>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <SectionHeader text={"About Me"} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              error quaerat voluptate, pariatur magni hic mollitia debitis
              officia at asperiores vero magnam, rem distinctio itaque velit
              quam sint quo nemo. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Dolores error quaerat voluptate, pariatur magni
              hic mollitia debitis officia at asperiores vero magnam, rem
              distinctio itaque velit quam sint quo nemo. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Dolores error quaerat
              voluptate, pariatur magni hic mollitia debitis officia at
              asperiores vero magnam, rem distinctio itaque velit quam sint quo
              nemo.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <div className="button-container">
                <Button href={CV} label="My CV" />
                <Button
                  href="https://www.linkedin.com/in/vtlanglois/"
                  label="LinkedIN"
                />
                <Button href="https://github.com/vtlanglois" label="GitHub" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
