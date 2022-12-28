
import '../App.css';
import './Work.css';
import { useState } from "react";
import { Card, CardBody, CardGroup, CardTitle } from "reactstrap";
import ContactIcons from '../components/ContactIcons/ContactIcons';
import WorkAccordian from '../components/WorkAccordian/WorkAccordian';


const Work = () => {

    return (

        <div>
            <body className = 'App-body'>
            <WorkAccordian/>
            </body>
        </div>
    );
}
export default Work;