import {
  Button,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import cookBook from "../public/cook-book.png";

function BarraNavegacao(className: any) {
  return (
    <Navbar
      className={`mb-3 rounded ${className}`}
      style={{ background: "white" }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Image {...cookBook} alt="logo" width={40} height={30} />O que tem pra
          comer?
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Login</Nav.Link>
            <NavDropdown title="Receitas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Minhas Receitas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Cadastrar Nova Receita
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BarraNavegacao;
