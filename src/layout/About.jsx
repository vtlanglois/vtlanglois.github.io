import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import CV from "../vincent-langlois-cv.pdf";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="intro-container">
              <h1>Hi! <span className="waving-emoji">👋</span>😄</h1>
              <h1>I'm Vincent Langlois.</h1>
              <h2>I build things, often using</h2>
              <h2>
                <code>{"[arrays,]"}</code> and <code>{"{...objects}"}</code>.
              </h2>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <SectionHeader className="about-header" text={"About Me"} />
            <p>
              I am an <b>Indiana University</b> graduate with a{" "}
              <b>Bachelor of Science in Computer Science</b> specializing in{" "}
              <b>Software Engineering</b>. I plan on building upon my love for
              learning, my interest in technology, and my education to develop a
              long-lasting software engineering career focused on building
              software that can make the world better in any way possible.
            </p>
            <p>
              In my free time, I enjoy playing video games, painting, cooking,
              and building Lego models. I also enjoy learning about any topic
              that interests me, from Foley sound design to mythology.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="button-container">
                <Button href={CV} label="My CV" />
                <Button
                  href="https://www.linkedin.com/in/vtlanglois/"
                  label="LinkedIn"
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
