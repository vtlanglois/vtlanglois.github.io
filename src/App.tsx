import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import About from "./components/layout/About";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h3>Header</h3>
        </div>
      </header>
      <About />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <h2>Skills</h2>
              <p>
                Web Development &rarr; React, TypeScript, JS, Next.JS, Node.JS,
                HTML/CSS, SCSS
              </p>
              <p>Database &rarr; SQL, MySQL, PostgresSQL, MongoDB</p>
              <p>Programming Languages &rarr; Java, C, Python</p>
              <p>Development Tools &rarr; Git, Github, JIRA, VSCode</p>
              <p>Tech Misc. &rarr; Arduino, UNIX</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>
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
