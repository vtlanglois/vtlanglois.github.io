import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WebsiteHeader from './components/WebsiteHeader';


function App() {
  return (
    <div> {/**? having classname="App" here changed the formatting overall */}

      <header className='App-header'>
      <WebsiteHeader/>
      <h2>This entire site is under development whenever I have free time. The goal of this project is for me to learn more about React, Typescript, CSS, and HTML. Please refer to my LinkedIN for now.</h2>
      </header>
    </div>
  );
}

export default App;


