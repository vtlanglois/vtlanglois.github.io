import Emoji from "../components/Emoji";
import SectionHeader from "../components/SectionHeader";

const Education = () => {
  return (
    <section aria-labelledby="education-header">
      <div className="container mb-4">
        <div className="row">
          <div className="col">
            <SectionHeader id="education-header" className="education-header">
              <Emoji>🏫</Emoji>
              Education
            </SectionHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <p className="h5">
              <b>
                <u>Indiana University</u>
              </b>
              , Bloomington, Indiana
            </p>
          </div>
          <div className="col-md-6 col-sm-6 text-sm-end">
            <p className="h6">
              <Emoji>🗓️</Emoji>
              <time datetime="2019-08">Aug '19</time> -{" "}
              <time dateTime="2023-05">May '23</time>
            </p>
          </div>
          <div className="row">
            <div className="col">
              <p className="h6">
                <Emoji>📜</Emoji>
                <i>
                  Bachelors of Science in Computer Science{" "}
                  <u>with High Distinction</u>
                </i>
              </p>
              <p className="h6">Specialization in Software Engineering</p>
              <p className="h6"> Minor in Game Design</p>
              <code>full transcript coming in later update</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
