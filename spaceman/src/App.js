import logo from "./logo.svg";
import "./App.css";
import Fondoindex1 from "./fondo1.mp4";
import Nav from "./nav"
import Boton from "./boton";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <video autoPlay loop src={Fondoindex1}
          
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "-1",
          }}

        ></video>

<Nav></Nav>

      <Boton></Boton>

      </header>

      
      
    </div>
  );
}

export default App;
