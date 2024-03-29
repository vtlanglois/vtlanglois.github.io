import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import CV from "../vincent-langlois-cv.pdf";
import Emoji from "../components/Emoji";

const About = () => {
  return (
    <section className="about-section" aria-label="Introduction">
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-5 col-sm-12 my-md-0 my-3 text-md-start text-center">
            <div className="intro-container mb-4">
              <h1>
                Hi!
                <Emoji className="ms-1 waving-emoji">👋</Emoji>
                <Emoji>😄</Emoji>
                <br />
                I'm <u>Vincent Langlois.</u>
              </h1>
              <p className="h2">
                I build <i>things</i>, often using
                <br />
                <code>{"<elements/>"}</code>, <code>{"functions()"}</code>,
                <br />
                <code>{"[arrays,]"}</code> and <code>{"{...objects}"}</code>.
              </p>
            </div>
            <div className="d-lg-block d-none">
              <div className="button-container d-flex justify-content-lg-between justify-content-evenly">
                <Button href={CV} label="My CV" icon={faFile} />
                <Button
                  href="https://www.linkedin.com/in/vtlanglois/"
                  label="LinkedIn"
                  icon={faLinkedin}
                />
                <Button
                  href="https://github.com/vtlanglois"
                  label="GitHub"
                  icon={faGithub}
                />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <SectionHeader className="about-header">
              <Emoji>📖</Emoji>
              About Me
            </SectionHeader>
            <p>
              I'm a recent graduate of{" "}
              <b>
                <u>Indiana University Bloomington</u>
              </b>
              , where I spent my undergraduate years learning computer science and game design, teaching
              programming to my local community, and helping others in any way I could. Currently, I
              am a software engineer for{" "}
              <b>
                <u>Eli Lilly & Company</u>
              </b>{" "}
              in Indianapolis, Indiana.
            </p>
            <p>
              Ever since I was a child, I've always been building and
              programming <i>things</i>; LEGO sets, Minecraft worlds, websites,
              games, and robots to name a few. If there's something that I can build, I'll be there to build it!
            </p>
            <p>
              When I'm not coding or building things, I enjoy writing,
              photography, cooking, and hanging out with folk. I also enjoy
              learning more about the wonderful world we live in.
            </p>
          </div>
        </div>
        <div className="row d-lg-none d-block gy-3">
          <div className="col-12">
            <div className="button-container d-flex justify-content-lg-between justify-content-evenly">
              <Button href={CV} label="My CV" icon={faFile} />
              <Button
                href="https://www.linkedin.com/in/vtlanglois/"
                label="LinkedIn"
                icon={faLinkedin}
              />
              <Button
                href="https://github.com/vtlanglois"
                label="GitHub"
                icon={faGithub}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
