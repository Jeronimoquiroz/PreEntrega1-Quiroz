
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../NavBar/CartWidget/CartWidget'
import Contador from '../Contador';

function NavBar() {
  return (
    <div class="position-relative">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Pro Security</Navbar.Brand>
          <Nav className="me-auto "> 
            <div class="position-absolute top-50 start-50 translate-middle d-flex ">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            </div>
            <div class="position-absolute top-0 end-0 ">
            <Nav.Link href="#pricing" ><CartWidget/></Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;