import Button from "./components/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import CV from "./vincent-langlois-cv.pdf"

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h3>Header</h3>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h1>Hi! 👋😄</h1>
              <h1>I'm Vincent Langlois.</h1>
              <h2>I build things, often using</h2>
              <h2>
                <code>{"[arrays,]"}</code> and <code>{"{...objects}"}</code>.
              </h2>
            </div>
            <div className="col-md-7 col-sm-12">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
                error quaerat voluptate, pariatur magni hic mollitia debitis
                officia at asperiores vero magnam, rem distinctio itaque velit
                quam sint quo nemo. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Dolores error quaerat voluptate, pariatur magni
                hic mollitia debitis officia at asperiores vero magnam, rem
                distinctio itaque velit quam sint quo nemo. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Dolores error quaerat
                voluptate, pariatur magni hic mollitia debitis officia at
                asperiores vero magnam, rem distinctio itaque velit quam sint quo
                nemo.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <div className="button-container">
                  <Button
                    href={CV}
                    label="My CV"
                  />
                  <Button
                    href="https://www.linkedin.com/in/vtlanglois/"
                    label="LinkedIN"
                  />
                  <Button
                    href="https://github.com/vtlanglois"
                    label="GitHub"
                  />
                </div>
              </div>
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
