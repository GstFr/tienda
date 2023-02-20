
import "./App.css";
import Fondoindex1 from "./fondo1.mp4";

import Boton from "./componentes/boton/boton";
import BarraNav from "./componentes/nav/nav";
import Carrito from "./componentes/carrito/carrito";
import  ItemListContainer from "./componentes/listaItems/lista";

function App() {
  return (
    <div className="App">
       <BarraNav/>
      <header className="App-header">
     
        <video className="video" autoPlay loop src={Fondoindex1}/>
        <Boton/>
        <ItemListContainer greeting={''}/> 
      </header>
        
    </div>
  );
}

export default App;

