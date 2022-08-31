import { Link } from "react-router-dom";
import WebsiteHeader from "./WebsiteHeader";
import './App.css';

const About = () => {
    return (

        <div>
            <header className='App-header'>
            <WebsiteHeader/>
            <Link to="/">Home</Link>
            <h2>About Page</h2>
            </header>
        </div>
    );
}
export default About;