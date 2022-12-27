import { Link } from "react-router-dom";
import ContactIcons from "../components/ContactIcons/ContactIcons";
import WebsiteHeader from "../components/WebsiteHeader";
import '../App.css';


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