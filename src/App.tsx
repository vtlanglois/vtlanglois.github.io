import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import About from "./layout/About";
import Button from "./components/Button";
import SkillsList from "./layout/Skills";
import Contact from "./layout/Contact";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h3>⭐️ Vincent Langlois</h3>
        </div>
      </header>
      <section className="main-content">
        <About />
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h5>Indiana University</h5>
              </div>
              <div className="col-md-6 col-sm-6 text-sm-end">
                <h6>Aug '23 - Present</h6>
              </div>
              <div className="row">
                <div className="col">
                  <i>
                    <h6>Bachelors of Science in Computer Science</h6>
                    <h6>Specialization in Software Engineering</h6>
                    <h6>Minor in Game Design</h6>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <SkillsList/>
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
          <h3>Footer</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
