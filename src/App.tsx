import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import About from "./layout/About";
import SkillsList from "./layout/Skills";
import Contact from "./layout/Contact";
import Education from "./layout/Education";
import Work from "./layout/Work";
import Strengths from "./layout/Strengths";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <h4 className="mb-0">Vincent Langlois</h4>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <About />
        <Education />
        <Work />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <SkillsList />
              </div>
              {/* <div className="col-md-5 col-sm-12">
                <Contact />
              </div> */}
              <div className="col-md-7 col-sm-12">
                <Strengths />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <h6 className="mb-0">Vincent Langlois - Personal Website 2.0</h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
