import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import About from "./layout/About";
import SkillsList from "./layout/Skills";
import Contact from "./layout/Contact";
import Education from "./layout/Education";
import Work from "./layout/Work";
import Strengths from "./layout/Strengths";
import Celebration from "./layout/Celebration";

function App() {
  return (
    <div>
      <header className="mb-md-4">
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <p className="mb-0">Vincent Langlois</p>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
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
      </main>
      <footer>
        <div className="container">
          <div className="row py-3 justify-content-center text-md-start text-center">
            <div className="col-md-6 col-sm-12">
              <p className="mb-0">Vincent Langlois - Personal Website 2.0</p>
            </div>
            <div className="col-md-1 col-sm-12 offset-lg-4">
              <a
                href="https://www.linkedin.com/in/vtlanglois/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="col-md-1 col-sm-12">
              <a
                href="https://github.com/vtlanglois"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
