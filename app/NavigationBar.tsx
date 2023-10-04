import { signOut } from "firebase/auth";
import { useRef } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { auth } from "../lib/firebase";
import NavLink from "./NavLink";

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function NavigationBar() {
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSearch(e: any) {
    e.preventDefault();
    const search = searchRef.current?.value;
    window.location.href = `/recipe.list?search=${search}`;
  }

  function handleLogout() {
    signOut(auth);
    localStorage.removeItem("userId");
    window.location.href = "/";
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
          <p style={{
            fontSize: "20px",
            color: "#67a438",
            marginTop: "20px"
            }}>
            {`${diasDaSemana[hoje.getDay()]}, ${hoje.toLocaleDateString('pt-BR')}`}
          </p>
          <Navbar.Brand href="/recipe.list">
            <img
              src="/cook-book.png"
              alt="logo"
              height="74px"
              style={{ marginRight: "10px" }}
            />
            <img
              src="/comida-pra-semana-high-resolution-logo-color-on-transparent-background (1).png"
              alt="logo"
              width={500}
            />
            
          </Navbar.Brand>
          
          <Form className="d-flex m-0" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Digite o que você procura:"
              className="me-2"
              aria-label="Search"
              ref={searchRef}
            />
            <Button
              className="button"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#67a438",
                border: "none",
                borderRadius: "7px",
                color: "#fff",
                padding: "1px 3px",
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
                width: "160px",
              }}
              onClick={handleSearch}
            >
              Pesquisar
            </Button>
          </Form>
        </Container>
      </Navbar>
      <nav
        className="nav nav-pills nav-fill mb-4"
        style={{ background: "#EC9131", fontWeight: "bold", fontSize: "20px" }}
      >
        <NavLink href="/recipe.list">Receitas</NavLink>
      <NavLink href="/register.meal">Cadastrar Refeição</NavLink>
        <NavLink href="/weekly.planning">Planejamento Semanal</NavLink>
        <NavLink href="/shopping.list">Lista de Compras</NavLink>
        <NavLink href="/" onClick={handleLogout}>
          Sair
        </NavLink>
      </nav>
    </>
  );
};
