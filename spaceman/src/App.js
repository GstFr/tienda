import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/componentes/navbar/navbar";
import Fondo1 from "./fondo1.mp4"
import Boton from "../src/componentes/boton/boton";
import  ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="App">
    
<Navbar/>
<div className="fondo">

<ItemListContainer  />

</div>
      <header className="App-header">
       
        <video className="video" autoPlay muted loop src={Fondo1} />
        
        <Boton />
        
      </header>
      
      </div>

    
  );
}

export default App;
