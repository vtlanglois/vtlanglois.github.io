import { Link } from "react-router-dom";
import '../App.css'
import ContactIcons from "../components/ContactIcons/ContactIcons";
import { Button } from "reactstrap";
import {Document, Page, } from 'react-pdf';
import WorkAccordian from "../components/WorkAccordian/WorkAccordian";

const About = () => {
    return (

        <div className="red">
            <body className="App-body">
            <p>Hello! My name is Vincent Langlois. </p>
                <p>I am a senior studying computer science at Indiana University.</p>
                <p>I wanted to learn more about Typescript, React, and web design, so I decided to make my own website on Github Pages!</p>
                <p>When this is completed, this will be the go-to website to learn about me!</p>
                <WorkAccordian />
            </body>
        </div>
    );
}
export default About;