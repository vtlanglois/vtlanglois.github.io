import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import CV from "../vincent-langlois-cv.pdf";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="intro-container">
              <h1>
                Hi! <span className="waving-emoji">👋</span>😄
              </h1>
              <h1>I'm <u>Vincent Langlois.</u></h1>
              <h2>I build <i>things</i>, often using</h2>
              <h2>
                <code>{"<tags/>"}</code>, <code>{"functions()"}</code>,
              </h2>
              <h2>
                <code>{"[arrays,]"}</code> and <code>{"{...objects}"}</code>.
              </h2>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <SectionHeader className="about-header" text={"About Me"} />
            <p>
              I'm a recent graduate of <b><u>Indiana University Bloomington</u></b>,
              where I spent my undergraduate years learning CS, teaching
              programming, and helping others in any way I could. Currently, I
              am a software developer for <b><u>Eli Lilly & Company</u></b> in
              Indianapolis, Indiana.
            </p>
            <p>
              Even since I was a child, I've always been building and
              programming <i>things</i>; LEGO sets, Minecraft worlds, websites,
              games, and robots to name a few. This passion for creation led me
              to pursue CS, where I could create things using magical words!
            </p>
            <p>
              When I'm not coding or building things, I enjoy writing,
              photography, cooking, and hanging out with folk. I also enjoy
              learning more about the wonderful world we live in.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="button-container">
                <Button className="cv-button" href={CV} label="My CV" />
                <Button
                  className="linkedin-button"
                  href="https://www.linkedin.com/in/vtlanglois/"
                  label="LinkedIn"
                />
                <Button
                  className="github-button"
                  href="https://github.com/vtlanglois"
                  label="GitHub"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
