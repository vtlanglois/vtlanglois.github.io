import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import WebsiteHeader from './components/WebsiteHeader';


function App() {
  return (
    <div> {/**? having classname="App" here changed the formatting overall */}

      <header className='App-header'>
      <WebsiteHeader/>
      <h2>Under Construction!</h2>
      <p>Hello! My name is Vincent Langlois. </p>
      <p>I am a senior studying computer science at Indiana University</p>
      <p>I wanted to learn more about Typescript, React, and web design, so I decided to make my own website on Github Pages!</p>
      <p>When this is completed, this will be the go-to website to learn about me!</p>
      </header>
    </div>
  );
}

export default App;


