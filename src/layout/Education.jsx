import SectionHeader from "../components/SectionHeader";

const Education = () => {
  return (
    <section>
      <div className="container mb-lg-4">
        <div className="row">
          <div className="col">
            <SectionHeader className="education-header">
              <span className="me-2" role="img" aria-hidden="true">
                🏫
              </span>
              Education
            </SectionHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h5>
              <b>
                <u>Indiana University</u>
              </b>
              , Bloomington, Indiana
            </h5>
          </div>
          <div className="col-md-6 col-sm-6 text-sm-end">
            <h6 className="date-item">Aug '19 - May '23</h6>
          </div>
          <div className="row">
            <div className="col">
              <i>
                <h6 className="degree-item">
                  Bachelors of Science in Computer Science{" "}
                  <u>with High Distinction</u>
                </h6>
                <h6>Specialization in Software Engineering</h6>
                <h6> Minor in Game Design</h6>
                <code>full transcript coming in later update</code>
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
