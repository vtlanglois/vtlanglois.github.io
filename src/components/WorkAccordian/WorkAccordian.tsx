import { SetStateAction, useState } from "react";
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Accordion } from "reactstrap";
import { text } from "stream/consumers";
import "./WorkAccordian.css"
const WorkAccordian = () => {

    return (
        //@ts-ignore
        <UncontrolledAccordion stayOpen>
            <AccordionItem>
                <AccordionHeader targetId="1">
                    Education
                </AccordionHeader>
                <AccordionBody accordionId="1">
                <h4><b>Indiana University</b>, Bloomington, IN</h4>
                <h5><i>August 2019-May 2023</i></h5>
                <i>Bachelor of Science in Computer Science</i>
                <ul>
                    <li><b>Major: </b>Computer Science</li>
                    <li><b>Specialization: </b>Software Engineering</li>
                    <li><b>Minor: </b>Game Design</li>
                    <li><b>GPA: </b>3.84/4.00</li>
                </ul>
                
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">
                    Leadership &#38; Work Experience 
                </AccordionHeader>
                <AccordionBody accordionId="2">

                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="3">
                    Projects
                </AccordionHeader>
                <AccordionBody accordionId="3">

                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="4">
                   Technical Skills
                </AccordionHeader>
                <AccordionBody accordionId="4">
                <ul>
                    <li><b>Languages: </b> Java, C/C++, PHP, Python, C#, R</li>
                    <li><b>Web &#38; Database: </b>TypeScript, React, XML, JSON, PostgresSQL, MySQL</li>
                    <li><b>Frameworks: </b>Android, Spring Boot</li>
                    <li><b>Misc: </b>Agile, Git, GitHub, JIRA, Unix, Unity, Godot</li>
                </ul>
                </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>
    );
}

export default WorkAccordian;