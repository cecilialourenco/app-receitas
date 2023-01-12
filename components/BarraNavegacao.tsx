import { useRef } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import NavLink from "./NavLink";

function BarraNavegacao() {
  const searchRef = useRef<HTMLInputElement>(null);
  function handleSearch() {
    const search = searchRef.current?.value;
    window.location.href = `/lista?search=${search}`;
  }
  return (
    <>
      <Navbar
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/comida-pra-semana-high-resolution-logo-color-on-transparent-background.png"
              alt="logo"
              width={300}
              height={100}
            />
          </Navbar.Brand>

          <Form className="d-flex m-0">
            <Form.Control
              type="search"
              placeholder="Digite o que você procura:"
              className="me-2"
              aria-label="Search"
              ref={searchRef}
            />
            <Button style={{ background: "#98D3DF" }} onClick={handleSearch}>
              Pesquisar
            </Button>
          </Form>
        </Container>
      </Navbar>
      <nav
        className="nav nav-pills nav-fill mb-4"
        style={{ background: "#EC9131" }}
      >
        <NavLink href="/lista">Receitas</NavLink>
        <NavLink href="/cadastrar.receita">Cadastrar Receita</NavLink>
        <NavLink href="/planejamento.semanal">Planejamento Semanal</NavLink>
        <NavLink href="/login">Entrar</NavLink>
        <NavLink href="/signin">Cadastrar conta</NavLink>
      </nav>
    </>
  );
}
export default BarraNavegacao;
