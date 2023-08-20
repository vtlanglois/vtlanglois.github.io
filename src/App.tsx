import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import About from "./layout/About";
import Button from "./components/Button";
import SkillsList from "./layout/Skills";
import Contact from "./layout/Contact";
import Education from "./layout/Education";

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
       <Education />
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
