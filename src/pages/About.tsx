import '../App.css';
import WorkAccordian from "../components/WorkAccordian/WorkAccordian";
import TabHeader from "../components/ExperienceItem/TabHeader";
import {
    faUser
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
    return (

        <div className="red">
            <body className="App-body">
            <p>This website is NOT mobile-friendly. That'll be added later!</p>
            <h1>Hello! I'm Vincent Langlois, a software engineer who loves to learn.</h1>
            <br/>
            <TabHeader icon={faUser} title="About Me"/>
                <p>I am a senior at Indiana University pursuing a BS in Computer Science with a specialization in Software Engineering. 
                    I plan on building upon my love for learning, my interest in technology, and my education to develop a long-lasting software engineering career 
                    focused on building systems that can make the world better in any way possible.</p>
                <p>I want to learn more about web design, so I decided to make my own website on Github Pages! 
                    This allows me to practice with Typescript and React through practice, experimentation, and learning from my mistakes. 
                    If you want a better idea of who I am, please go to my <a href="https://www.linkedin.com/in/vtlanglois/">LinkedIn</a> page.</p>
                <WorkAccordian />
            </body>
        </div>
    );
}
export default About;