import "./nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from "../carrito/carrito.js";

function BarraNav() {
  return (
    <Navbar className="navBar"  >
      
          

            <div className="izquierda">
              <NavDropdown title="MENU" id="basic-nav-dropdown">
                <ul>
                <li><NavDropdown.Item href="#action/3.1">
                  Sobre nosotros
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action/3.2">
                  Menu de razas
                </NavDropdown.Item></li>
                <li><NavDropdown.Item href="#action/3.3">
                  Mis compras
                </NavDropdown.Item></li>
                </ul>
              </NavDropdown>
            </div>
            
            <div className="derecha">
              <Carrito></Carrito>
            </div>
          
       
     
    </Navbar>
  );
}

export default BarraNav;
