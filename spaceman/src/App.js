import logo from './logo.svg';
import './App.css';
import fondoindex2 from '../src/video/fondoindex2.mp4'

function App() {
  return (
    <div className="App">

<video autoPlay loop
style={{
position: "fixed",
minWidth: "100%",
minHeight: "100%",
top: "50%",
left:"50%",}}>

</video>



      <header className="App-header">
      

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
