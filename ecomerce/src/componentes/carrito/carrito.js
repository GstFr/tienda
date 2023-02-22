import { BsCart4 } from 'react-icons/bs';
import "./carrito.css"



function Carrito() {
    return (
      <a href="#" className='cart'>
        <BsCart4 className="icono"/>
        <span className="badge">4</span>
      </a>
    );
  }
  
  export default Carrito;
  