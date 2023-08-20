import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="container ">
      <h1>Back to One</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit
          ex assumenda iure sint animi perferendis iusto natus molestias minus
          nesciunt facere, eos, tenetur optio voluptatibus saepe quod
          repellendus fugit?
        </p>
      </div>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            error quaerat voluptate, pariatur magni hic mollitia debitis officia
            at asperiores vero magnam, rem distinctio itaque velit quam sint quo
            nemo.
          </p>
        </div>
        <div className="col-md-7 col-sm-12">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            error quaerat voluptate, pariatur magni hic mollitia debitis officia
            at asperiores vero magnam, rem distinctio itaque velit quam sint quo
            nemo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
