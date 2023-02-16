import "./nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from "../carrito/carrito.js";

function BarraNav() {
  return (
    <Navbar className="navBar" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="izquierda">
              <NavDropdown title="menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  sobre nosotros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  menu de razas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  mis compras
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="derecha">
              <Carrito></Carrito>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
