import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/componentes/navbar/navbar";
import Fondo1 from "./fondo1.mp4"
import Boton from "../src/componentes/boton/boton";
import  ItemListContainer from "./componentes/ItemListContainer/lista";



function App() {
  return (
    <div className="App">
    
<Navbar/>
      <header className="App-header">
       
        <video className="video" autoPlay muted loop src={Fondo1} />
        <br/>
        <Boton />
        <ItemListContainer greeting={"lista"} />
      </header>
    </div>
  );
}

export default App;
