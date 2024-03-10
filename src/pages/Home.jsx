import About from "../layout/About";
import SkillsList from "../layout/Skills";
import Contact from "../layout/Contact";
import Education from "../layout/Education";
import Work from "../layout/Work";
import Strengths from "../layout/Strengths";
import Celebration from "../layout/Celebration";

const Home = () => {
  return (
    <>
      <Celebration />
      <About />
      <Education />
      <Work />
      <section aria-label="Technical Skills and Personal Strengths">
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-lg-0 mb-4">
              <SkillsList />
            </div>
            {/* <div className="col-md-5 col-sm-12">
                <Contact />
              </div> */}
            <div className="col-md-6 col-sm-12">
              <Strengths />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
