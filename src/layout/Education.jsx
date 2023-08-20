import SectionHeader from "../components/SectionHeader";

const Education = () => {
    return (
        <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <SectionHeader text={"Education"}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h5><b>Indiana University</b>, Bloomington, Indiana</h5>
            </div>
            <div className="col-md-6 col-sm-6 text-sm-end">
              <h6>Aug '23 - Present</h6>
            </div>
            <div className="row">
              <div className="col">
                <i>
                  <h6>Bachelors of Science in Computer Science</h6>
                  <h6 className="related-item">Specialization in Software Engineering</h6>
                  <h6>Minor in Game Design</h6>
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Education;
