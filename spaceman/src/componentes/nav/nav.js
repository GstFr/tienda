import "./nav.css";
import Carrito from "../carrito/carrito.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function BarraNav() {
  return (
    <Navbar  >
      <Container className="navBar" >
      <Nav className=" navbar-dark bg-dark" >
       
            <NavDropdown title="Semillas" id="dropdown-autoclose-true ">
              <NavDropdown.Item >Automáticas</NavDropdown.Item>
              <NavDropdown.Item >Fotoperiodicas</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link >Quiénes somos</Nav.Link>
            <Nav.Link >Contactanos</Nav.Link>
        
            <Nav.Link ><Carrito></Carrito></Nav.Link>
            
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default BarraNav;


