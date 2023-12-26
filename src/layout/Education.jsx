import SectionHeader from "../components/SectionHeader";

const Education = () => {
  return (
    <section>
      <div className="container mb-4">
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
            <h3 className="h5">
              <b>
                <u>Indiana University</u>
              </b>
              , Bloomington, Indiana
            </h3>
          </div>
          <div className="col-md-6 col-sm-6 text-sm-end">
            <p className="h6 date-item">Aug '19 - May '23</p>
          </div>
          <div className="row">
            <div className="col">
              <i>
                <p className="h6 degree-item">
                  Bachelors of Science in Computer Science{" "}
                  <u>with High Distinction</u>
                </p>
                <p className="h6">Specialization in Software Engineering</p>
                <p className="h6"> Minor in Game Design</p>
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
