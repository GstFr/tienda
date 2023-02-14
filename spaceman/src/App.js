import logo from './logo.svg';
import './App.css';
import fondo1 from './fondo1.mp4'
function App() {
  return (
    <div className="App">

      <header className="App-header">
      
      <video autoPlay loop src={fondo1}
      
      
      style={{
        objectFit: 'cover',
          minWidth: '100%',
          minHeight: '100%',
          position: 'absolute',
          zIndex: '-1',
      }}>


</video>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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