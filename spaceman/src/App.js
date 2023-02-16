import "./App.css";
import Fondoindex1 from "./fondo1.mp4";

import Boton from "./componentes/boton/boton";
import BarraNav from "./componentes/nav/nav";
import Carrito from "./componentes/carrito/carrito";
import listaItems from "./componentes/listaItems/lista";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video className="video" autoPlay loop src={Fondoindex1}></video>
        <BarraNav></BarraNav>

        <Boton></Boton>
        <listaItems greeting={'Bienvenidos terricolas'}></listaItems> 
      </header>
    </div>
  );
}

export default App;
