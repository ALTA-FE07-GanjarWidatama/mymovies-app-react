import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          MyMovies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="text-white" href="#home" bg light>
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Favorite
            </Nav.Link>
          </Nav>
          <p className="text-center mt-4 mb-4">Or right-aligned</p>
          <Nav.Item>
            <Nav.Link className="text-white" eventKey="disabled" disabled>
              Dark Mode
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
