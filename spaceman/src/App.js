import "./App.css";
import Fondoindex1 from "./fondo1.mp4";

import Boton from "./componentes/boton/boton";
import BarraNav from "./componentes/nav/nav";
import Carrito from "./componentes/carrito/carrito";
import  ItemListContainer from "./componentes/listaItems/lista";

function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      <BarraNav/>
        <video className="video" autoPlay loop src={Fondoindex1}/>
        <Boton/>
        <ItemListContainer greeting={'Bienvenidos terricolas'}/> 
      </header>
        
    </div>
  );
}

export default App;