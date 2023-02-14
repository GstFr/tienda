import logo from "./logo.svg";
import "./App.css";
import fondoindex1 from "./fondo1.mp4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video
          autoPlay
          loop
          src={fondoindex1}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "-1",
          }}
        ></video>
      </header>
    </div>
  );
}

export default App;
