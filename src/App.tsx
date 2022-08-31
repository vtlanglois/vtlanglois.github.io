import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Link to="/about">About</Link>
      <h2>Github Pages</h2>
      <h3>Deploying React to Github</h3>
    </div>
  );
}

export default App;


