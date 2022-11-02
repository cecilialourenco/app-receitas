import { Button, Container, Form, Navbar } from "react-bootstrap";
import NavLink from "./NavLink";

function BarraNavegacao() {
  return (
    <>
      <Navbar style={{ background: "white" }} expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/comida-pra-semana-high-resolution-logo-color-on-transparent-background.png"
              alt="logo"
              width={250}
              height={100}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="O que procura?"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ background: "#98D3DF" }}>Pesquisar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <nav
        className="nav nav-pills nav-fill mb-4"
        style={{ background: "#EC9131" }}
        // expand="lg"
      >
        <NavLink href="/lista">Minhas Receitas</NavLink>
        <NavLink href="/cadastrar.receita">Cadastrar Receita</NavLink>
        <NavLink href="/planejamento.semanal">Planejamento Semanal</NavLink>
        <NavLink href="/login">Login</NavLink>
      </nav>
    </>
  );
}
export default BarraNavegacao;
