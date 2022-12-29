import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import WebsiteHeader from "./components/WebsiteHeader/WebsiteHeader";
import Education from "./pages/education/Education";

function App() {
  return (
    <div>
      <header className="App-header">
        <WebsiteHeader />
      </header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <footer className="App-header">
        <ContactIcons />
      </footer>
    </div>
  );
}

export default App;
