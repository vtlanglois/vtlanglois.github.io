import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Work from './pages/Work';
import WebsiteHeader from './components/WebsiteHeader';



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <WebsiteHeader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />}/> */}
        <Route path="/work" element={<Work />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
