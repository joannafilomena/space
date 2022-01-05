import logo from './images/spacex_logo.png';
import line from './images/line.png';
import recovered from './images/recovered.png';
import './App.css';
import Api from './api';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" className="logo"/>
        <img src={line} className="line" alt="line" />
      </header>
      
      <section className="App-info">
        <div className="column1">
          <h3>Mission</h3>
          <h1>Starlink-12 (v1.0)</h1>
          <h3>Rocket</h3>
          <img src={recovered} className="App-img" alt="recovered" />
          <h2>Falcon</h2>
          <button>Learn more</button>
        </div>
        <div className="column2">
          <h3>Launch date</h3>
          <h2>24 Jan 2021</h2>
          <h3>Launch site</h3>
          <h2>KSC LC 39A</h2>
        </div>
      </section>
      <img src={line} alt="line" />
    
 <Api />
    </div>
  );
}

export default App;
