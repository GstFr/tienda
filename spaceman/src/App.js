import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/componentes/navbar/navbar";
import Fondoindex1 from "./fondo1.mp4"
import Boton from "../src/componentes/boton/boton";
import  ItemListContainer from "./componentes/ItemListContainer/lista";



function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-header">
     
        <video className="video" autoplay muted loop src={Fondoindex1} />
        <Boton />
        <ItemListContainer greeting={"lista"} />
      </header>
    </div>
  );
}

export default App;
