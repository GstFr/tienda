import logo from './logo.svg';
import './App.css';
import fondoindex1 from './'

function App() {
  return (
    <div className="App">

<video autoPlay loop src={fondoindex1}
style={{
  objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1'
}}>

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