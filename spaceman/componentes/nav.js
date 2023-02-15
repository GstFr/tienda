import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function nav() {
  return (
    <>

<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">semillas</Nav.Link>
            <Nav.Link href="#features">sobre nosotros</Nav.Link>
            <Nav.Link href="#pricing">contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}
export default nav;