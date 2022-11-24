import { SetStateAction, useState } from "react";
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Accordion } from "reactstrap";
import { text } from "stream/consumers";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
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
                    <ExperienceItem title='BCForward,' location='Carmel, IN' job='Software Engineering Intern' startMonth="May 2022" endMonth="August 2022" 
                    details = {["Worked remotely in a 7-person team developing the Indiana Prosecutor Case Management System", 
                    "Created quality-of-life features that reduced customer service requests for account-related issues by the hundreds", 
                    "Developed features using a React frontend, PHP backend, and MySQL databases"]}/>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="3">
                    Projects
                </AccordionHeader>
                <AccordionBody accordionId="3">
                    <ExperienceItem title = "Personal Website" startMonth="September 2022" endMonth="Ongoing"
                    details={["Working on a personal website to provide more information about myself and to learn web development",
                    "Developing using React and Typescript, hosted on Github Pages"]}/>
                    <ExperienceItem title = 'Brainstorm' startMonth="September 2021" endMonth="December 2021" job='Fullstack Software Engineer'
                    details={["Created a learning management system web application focused on increasing K-8th grade student engagement through gamified learning",
                    "Collaborated with 4-person team using Agile software development methodology over 5 two-week sprints",
                    "Developed using Java Spring Boot, React, and PostgreSQL"]}/>
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