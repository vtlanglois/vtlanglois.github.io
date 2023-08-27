import SectionHeader from "../components/SectionHeader";

const Education = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader className="education-header" text={"Education"} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h5>
              <b><u>Indiana University</u></b>, Bloomington, Indiana
            </h5>
          </div>
          <div className="col-md-6 col-sm-6 text-sm-end">
            <h6 className="date-item">Aug '19 - May '23</h6>
          </div>
          <div className="row">
            <div className="col">
              <i>
                <h6 className="degree-item">Bachelors of Science in Computer Science</h6>
                <h6 className="related-item">
                  Specialization in Software Engineering
                </h6>
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
