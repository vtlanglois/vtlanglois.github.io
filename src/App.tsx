import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import WebsiteHeader from "./components/WebsiteHeader/WebsiteHeader";

function App() {
  return (
    <div>
      <header className="App-header">
        <WebsiteHeader />
      </header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <footer className='App-header'><ContactIcons/></footer>
    </div>
  );
}

export default App;
