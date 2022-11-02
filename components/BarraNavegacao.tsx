import {
  Button,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import novalogo from "../public/o-que-tem-pra-comer-high-resolution-logo-color-on-transparent-background.png";

function BarraNavegacao() {
  return (
    <Navbar
      className="mb-3 rounded"
      style={{ background: "#fcbc04" }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Image {...novalogo} alt="logo" width={200} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Receitas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/lista">Minhas Receitas</NavDropdown.Item>
              <NavDropdown.Item href="/cadastrar.receita">
                Cadastrar Nova Receita
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="O que procura?"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ background: "#a0bdcf" }}>Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default BarraNavegacao;
