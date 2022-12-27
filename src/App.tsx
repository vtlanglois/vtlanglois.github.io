import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WebsiteHeader from './components/WebsiteHeader';
import ContactIcons from './components/ContactIcons/ContactIcons';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';


function App() {
  return (
    <div>
    <WebsiteHeader/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />}/>
      </Routes>
    </div>
  );
}

export default App;


