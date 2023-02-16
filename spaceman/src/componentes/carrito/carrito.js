import { BsCart4 } from 'react-icons/bs';
import "./carrito.css"



function Carrito() {
    return (
      <a href="#" class="cart">
        <BsCart4 className="icono" />
        <span class="badge">4</span>
      </a>
    );
  }
  
  export default Carrito;
  
