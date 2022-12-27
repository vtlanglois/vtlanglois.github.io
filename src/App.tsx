import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WebsiteHeader from './components/WebsiteHeader';
import ContactIcons from './components/ContactIcons/ContactIcons';


function App() {
  return (
    <div className="red">

            <body className="App-body">
            <p>Hello! My name is Vincent Langlois. </p>
                <p>I am a senior studying computer science at Indiana University.</p>
                <p>I wanted to learn more about Typescript, React, and web design, so I decided to make my own website on Github Pages!</p>
                <p>When this is completed, this will be the go-to website to learn about me!</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </body>
            <footer className='App-header'><ContactIcons/></footer>
        </div>
  );
}

export default App;


