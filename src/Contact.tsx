import { Link } from "react-router-dom";
import WebsiteHeader from "./components/WebsiteHeader";
import './App.css';
import ContactIcons from "./components/ContactIcons";

const Contact = () => {
    return (

        <div>
            <header className='App-header'>
                <WebsiteHeader />
                <ContactIcons/>
            </header>
        </div>
    );
}
export default Contact;