import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import WebsiteHeader from "./components/WebsiteHeader/WebsiteHeader";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Toybox from "./pages/projects/Toybox";


function App() {
  return (
    <div >
      <header className="App-header">
        <WebsiteHeader />
      </header>
      <Routes >
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/toybox" element={<Toybox />} />
      </Routes>
      <footer className="App-header">
        <ContactIcons />
      </footer>
    </div>
  );
}

export default App;
