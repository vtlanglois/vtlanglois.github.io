import { Link } from "react-router-dom";
import WebsiteHeader from "./components/WebsiteHeader";
import './App.css';
import ContactIcons from "./components/ContactIcons";

const Home = () => {
    return (

        <div>
            <header className='App-header'>
                <WebsiteHeader />
                <h2>Work Page</h2>
            </header>
        </div>
    );
}
export default Home;