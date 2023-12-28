import Emoji from "../components/Emoji";
import SectionHeader from "../components/SectionHeader";

const Education = () => {
  return (
    <section>
      <div className="container mb-4">
        <div className="row">
          <div className="col">
            <SectionHeader className="education-header">
              <Emoji>🏫</Emoji>
              Education
            </SectionHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h3 className="h5">
              <b>
                <u>Indiana University</u>
              </b>
              , Bloomington, Indiana
            </h3>
          </div>
          <div className="col-md-6 col-sm-6 text-sm-end">
            <p className="h6">
              <Emoji>🗓️</Emoji>
              Aug '19 - May '23
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
