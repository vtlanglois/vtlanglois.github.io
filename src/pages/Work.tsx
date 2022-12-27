
import '../App.css';
import './Work.css';
import { useState } from "react";
import { Card, CardBody, CardGroup, CardTitle } from "reactstrap";
import ContactIcons from '../components/ContactIcons/ContactIcons';
import WebsiteHeader from '../components/WebsiteHeader';
import WorkAccordian from '../components/WorkAccordian/WorkAccordian';


const Work = () => {

    return (

        <div>
            <header className='App-header'>
                <WebsiteHeader />
            </header>
            <body className = 'App-body'>
            <WorkAccordian/>
            </body>
            <footer className='App-header'><ContactIcons/></footer>
        </div>
    );
}
export default Work;