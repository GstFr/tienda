import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from "../carrito/carrito";

function NavBar() {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Menú</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Quienes somos</Nav.Link>
            
            <NavDropdown title="Genéticas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Automáticas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Fotoperiodicas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Clones
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2">Contacto</Nav.Link>
          </Nav>
          <Carrito className="d-flex">
            
           
          </Carrito>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;