import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Body />
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
