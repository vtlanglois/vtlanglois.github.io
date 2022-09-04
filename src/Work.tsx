import WebsiteHeader from "./components/WebsiteHeader";
import './App.css';
import './Work.css';
import { useState } from "react";
import { Card, CardBody, CardGroup, CardTitle } from "reactstrap";
import WorkAccordian from "./components/WorkAccordian/WorkAccordian";

const Work = () => {

    return (

        <div>
            <header className='App-header'>
                <WebsiteHeader />
                <WorkAccordian/>
            </header>
        </div>
    );
}
export default Work;