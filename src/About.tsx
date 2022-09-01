import { Link } from "react-router-dom";
import WebsiteHeader from "./components/WebsiteHeader";
import './App.css';
import ContactIcons from "./components/ContactIcons";

const About = () => {
    return (

        <div>
            <header className='App-header'>
                <WebsiteHeader />
                <h2>About Page</h2>
            </header>
        </div>
    );
}
export default About;