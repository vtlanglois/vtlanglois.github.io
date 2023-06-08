import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactIcons from "./components/general/ContactIcons/ContactIcons";
import WebsiteHeader from "./components/general/WebsiteHeader/WebsiteHeader";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      {/*@TODO: #7 figure out why header CSS is not applying to WebsiteHeader*/}
      <header className="App-header">
        <WebsiteHeader />
      </header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        {/*@TODO: #8 add a 404 page*/}
      </Routes>
      <footer className="App-header">
        <ContactIcons />
      </footer>
    </div>
  );
}

export default App;
