import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import About from "./layout/About";
import SkillsList from "./layout/Skills";
import Contact from "./layout/Contact";
import Education from "./layout/Education";
import Work from "./layout/Work";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h3>Vincent Langlois</h3>
        </div>
      </header>
      <section className="main-content">
        <About />
        <Education />
        <Work />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <SkillsList />
              </div>
              <div className="col-md-5 col-sm-12">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <div className="container">
          <h6>Vincent Langlois - Personal Website V2.0 </h6>
        </div>
      </footer>
    </div>
  );
}

export default App;
